const express = require('express');
const { login, register, myProfile, getAllUsers } = require("../controllers/userControllers");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.post('/login', login);
router.post('/register', register);
router.get('/getMe', protect, myProfile);
router.get('/getallusers', getAllUsers);
module.exports = router;