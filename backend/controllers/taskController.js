import Task from '../models/Task.js';

// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};

// @desc    Set task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: 'Please add a title' });
    return;
  }

  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    user: req.user.id,
  });

  res.status(200).json(task);
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400).json({ message: 'Task not found' });
    return;
  }

  // Check for user
  if (!req.user) {
    res.status(401).json({ message: 'User not found' });
    return;
  }

  // Make sure the logged in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401).json({ message: 'User not authorized' });
    return;
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400).json({ message: 'Task not found' });
    return;
  }

  // Check for user
  if (!req.user) {
    res.status(401).json({ message: 'User not found' });
    return;
  }

  // Make sure the logged in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401).json({ message: 'User not authorized' });
    return;
  }

  await task.deleteOne();

  res.status(200).json({ id: req.params.id });
};

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
