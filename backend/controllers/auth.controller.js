import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, {expiresIn: "7d"});
}

// @desc    Register a new user
// @route   /api/auth/register
// @access  Public
export const registerUser = async(req, res) => {
    try {

        const { name, email, password, profileImageUrl } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
        })

        res.status(201).json({
            message: "User created successfully",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                profileImageUrl: user.profileImageUrl,
                token: generateToken(user._id),
            }
        })

    } catch (error) {
        res.status(500).json({ message: "Server error!!", error: error.message });
    }
};

// @desc    Login user
// @route   /api/auth/login
// @access  Public
export const loginUser = async(req, res) => {
    try {
        
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).json({ message: "Invalid email or password"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(500).json({ message: "Invalid email or password"});
        }

        res.status(200).json({
            message: "User login successfull",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                profileImageUrl: user.profileImageUrl,
                token: generateToken(user._id),
            }
        })

    } catch (error) {
        res.status(500).json({ message: "Server error!!", error: error.message });
    }
};

// @desc    Get User's profile
// @route   /api/auth/profile
// @access  Private (Requires JWT)
export const getUserProfile = async(req, res) => {
      try {
        
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found!!"});
        }

        res.status(200).json({
            message: "User found successfully",
            data: user,
        })

    } catch (error) {
        res.status(500).json({ message: "Server error!!", error: error.message });
    }
}