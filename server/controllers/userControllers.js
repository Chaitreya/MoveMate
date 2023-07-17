const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { all } = require("../routes/userRoutes");

// @desc   register users
// @route  POST api/users/register
// @access public
const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please add all field");
    }

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
        firstName, lastName, email, password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.firstName + " " + user.lastName,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});


// @desc   login users
// @route  POST api/users/login
// @access public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(201).json({
            _id: user._id,
            name: user.firstName + " " + user.lastName,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc   get all user data
// @route  GET api/users/getallusers
// @access private
const getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find();

    res.status(200).json(allUsers);
})


// @desc   get user data
// @route  POST api/users/me
// @access private
const myProfile = asyncHandler(async (req, res) => {
    const { _id, firstName, lastName, email } = await User.findById(req.user._id);

    res.status(200).json({ id: _id, firstName, lastName, email })
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}
module.exports = {
    login, register, myProfile, getAllUsers
}