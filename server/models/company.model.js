import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

const Company = mongoose.model("Company", companySchema)

export default Company;