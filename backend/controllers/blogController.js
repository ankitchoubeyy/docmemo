const Blog = require("../models/blogModel")

//! Create Blog
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//! Get All Blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//! Get Single Blog
const getSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//! Update Blog
const updateBlog = async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//! Delete Blog
const deleteBlog = async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//! Export
module.exports = { createBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog }
