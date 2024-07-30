import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['jobseeker', 'recruiter'],
        required: true
    },
    profile: {
        bio: {
            type: String,
        },
        skills: {
            type: String
        },
        resume: {
            type: String
        },
        resumeOriginalName: {
            type: String,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        },
        profleImage: {
            type: String,
            default: ""
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;