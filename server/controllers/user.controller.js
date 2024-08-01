import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const { fullname, email, phone, password, role } = req.body

        if (!fullname || !email || !phone || !password || !role) {
            return res.status(401).json({
                message: "Please fill all the details..!",
                success: false
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            fullname,
            email,
            phone,
            password: hashedPassword,
            role,
        })

        return res.status(200).json({
            message: "Account created successfully",
            success: true,
        })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to register user",
            success: false,
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(402).json({
                message: "Please fill all the details..!",
                success: false
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: "Incorrect email or password"
                
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            return res.status(404).json({
                message: "Incorrect email or password"
            })
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does not exist with current role"
            })
        }

        const tokenData = {
            userId: user._id,
        }

        const token = jwt.sign(
            tokenData,
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )

        const responseUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie(
            "token",
            token,
            {
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            }).json({
                message: "Logged in successful",
                user: responseUser,
                token,
                success: true,
            })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to login user",
            success: false
        })
    }
}

const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to logut user",
            success: false
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phone, bio, skills } = req.body;
        console.log(req.body);
        const file = req.file; // Assuming you have middleware for file uploads

        // Cloudinary upload logic can go here if needed

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(',').map(skill => skill.trim());
        }

        const userId = req.id; 

        const updateData = {};
        if (fullname) updateData.fullname = fullname;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (bio) updateData.profile = { ...updateData.profile, bio };
        if (skillsArray) updateData.profile = { ...updateData.profile, skills: skillsArray };

        // Using findByIdAndUpdate to update the user
        const user = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        // Constructing the response user object
        const responseUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully",
            user: responseUser
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to update profile",
            success: false,
            error: error.message
        });
    }
};

export default updateProfile;



export { register, login, logout, updateProfile }
