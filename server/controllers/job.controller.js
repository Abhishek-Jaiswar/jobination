import Job from "../models/job.model.js";

const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobRole, jobType, experience, companyId, openPositions } = req.body

        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobRole || !jobType || !experience, !companyId || !openPositions) {
            return res.status(401).json({
                message: "Please fill all the details",
                success: false
            })
        }

        const newJob = await Job.create({
            title,
            description,
            requirements: requirements.split(','),
            salary,
            location,
            jobRole,
            jobType,
            experience,
            openPositions,
            company: companyId,
            createdBy: userId
        })

        return res.status(201).json({
            message: "Job posted successfully",
            success: true,
            job: newJob
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to post job",
            success: false
        })
    }
}

const getJob = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }

        const jobs = await Job.find(query).populate({
            path: 'company'
        }).sort({ createdAt: -1 });

        if (!jobs) {
            return res.status(401).json({
                message: "Job not found",
                success: false
            })
        }

        return res.status(201).json({
            message: "Jobs found",
            success: true,
            jobs
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to load job",
            success: false
        })
    }
}

const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId).populate({
            path: 'company'
        })
        if (!job) {
            return res.status(401).json({
                message: "Job not found",
                success: false
            })
        }

        return res.status(201).json({
            message: "Jobs found",
            success: true,
            job
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to load job",
            success: false
        })
    }
}

const getAdminPostedJob = async (req, res) => {
    try {
        const adminId = req.id;

        const job = await Job.find({ createdBy: adminId })
        if (!job) {
            return res.status(401).json({
                message: "Job not found",
                success: false
            })
        }

        return res.status(201).json({
            message: "Jobs found",
            success: true,
            job
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to load job",
            success: false
        })
    }
}

const updateJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobRole, jobType, experience, companyId } = req.body

        const jobId = req.params.id

        const jobData = {
            title,
            description,
            requirements,
            salary, 
            location,
            jobRole,
            jobType,
            experience,
            companyId
        }

        const job = await Job.findByIdAndUpdate(jobId, jobData , { new: true })
        if (!job) {
            return res.status(401).json({
                message: "Failed to update job",
                success: false,
                error: error.message
            })
        }

        const responseUpdate = {
            title: job.title,
            description: job.description,
            requirements: job.requirements,
            salary: job.salary,
            location: job.location,
            jobType: job.jobType,
            experience: job.experience,
            companyId: job.company
        }

        return res.status(201).json({
            message: "Job has been updated",
            success: true,
            job: responseUpdate
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to update job",
            success: false,
            error: error.message
        })
    }
}

export { postJob, getJob, getJobById, updateJob, getAdminPostedJob }