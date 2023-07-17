const express = require("express");
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/goalControllers.js');
const protectRoute = require("../middleware/authMiddleware.js");
const router = express.Router();


router.get("/", protectRoute, getGoals);

router.post("/", protectRoute, setGoals);

router.put("/:id", protectRoute, updateGoal);

router.delete("/:id", protectRoute, deleteGoal);

module.exports = router