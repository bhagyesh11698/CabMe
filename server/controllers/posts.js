import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        // res.send('Server is working');
        const postMessages = await PostMessage.find();

        // console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {

    }
}

export const createPost = (req, res) => {
    res.send('Post Created');
}