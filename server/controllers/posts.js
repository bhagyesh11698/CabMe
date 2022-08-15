const { Types } = require("mongoose");

const { postMessage } = require("../models");
const PostMessage = postMessage;

const getPosts = async(req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const createPost = async (req, res) =>  {
  const { firstName, lastName, email, price, seats, origin, destination } =
    req.body;

  const newPostMessage = new PostMessage({
    firstName,
    lastName,
    email,
    price,
    seats,
    origin,
    destination,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

const updatePost = async(req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    price,
    seats,
    origin,
    destination,
    date,
  } = req.body;

  if (!Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    firstName,
    lastName,
    email,
    price,
    seats,
    origin,
    destination,
    date,
    _id: id,
  };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}

const deletePost = async(req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}

const controller = {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost
};

module.exports = controller;
