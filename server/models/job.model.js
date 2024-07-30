import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [
        {
            type: String
        }
    ],
    salary: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ["part time", "full time"]
    },
    experience: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true
    },
    openPositions: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
}, {timestamps: true});

const Job = mongoose.model('Job', jobSchema)

export default Job;