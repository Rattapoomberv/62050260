const Blog = require("../models/blog");

exports.index = async (req, res, next) => {
  const blog = await Blog.find();

  res.status(200).json({
    message: "sucessfully loaded",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { task, detail, isActive } = req.body;

  const blog = new Blog({
    task: task,
    detail: detail,
    isActive: isActive,
  });

  await blog.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);

  res.status(200).json({
    message: "Sucessfully removed",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { task, detail, isActive } = req.body;

  await Blog.findByIdAndUpdate(id, {
    task: task,
    detail: detail,
    isActive: isActive,
  });

  res.status(200).json({
    message: "Successfully updated",
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  res.status(200).json({
    message: "Sucessfully get blog",
    data: blog,
  });
};
