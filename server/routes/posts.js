const express = require("express");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/rides", getPosts);
router.post("/create", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/rides/:id", deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router;
