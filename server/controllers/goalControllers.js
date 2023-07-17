const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");


// @desc   get goals
// @route  GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user._id })
    res.status(200).json(goals);
})

// @desc   set goals
// @route  POST api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("plz add a text field");
    }

    const goal = await Goal.create({
        user: req.user._id,
        text: req.body.text
    })
    res.status(200).json(goal);
})

// @desc   upadate goals
// @route  PUT api/goals
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const user = await User.findById(req.user._id);

    // check if user exists
    if (!user) {
        res.status(401);
        throw new Error("No user found")
    }

    if (goal.user.toString() !== user._id.toString()) {
        res.status(401);
        throw new Error('User not authorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedGoal);
})

// @desc   delete goals
// @route  DELETE api/goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("goal not found");
    }

    const user = await User.findById(req.user._id);

    // check if user exists
    if (!user) {
        res.status(401);
        throw new Error("No user found")
    }

    if (goal.user.toString() !== user._id.toString()) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}