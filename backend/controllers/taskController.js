const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task({ ...req.body, user: req.user });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.user }, req.body, { new: true });
    if(!task) return res.status(404).json({ msg: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
    if(!task) return res.status(404).json({ msg: "Task not found" });
    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
