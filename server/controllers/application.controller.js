import Application from "../models/application.model.js";
import Job from '../models/job.model.js'

const applyToJobs = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is not found",
                success: false
            })
        }

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })
        if (existingApplication) {
            return res.status(401).json({
                message: "You have already applied to this job",
                success: false
            })
        }

        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                message: false
            })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(newApplication)
        await job.save()

        return res.status(201).json({
            message: "Application has been submitted",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to apply jobs",
            success: false,
            error: error.message
        })
    }
}
const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } },
            }
        })

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: true
            })
        }

        return res.status(200).json({
            message: "Application found",
            applications: application
        })

    } catch (error) {
        return res.status(500).json({
            message: "Unable to find appliations",
            success: false,
            error: error.message
        })
    }
}
const getApplicatsForAdmin = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant',
                options: { sort: { createdAt: -1 } },
            }
        })
        if (!job) {
            return res.status(404).json({
                message: "Unable to find applicats",
                success: false
            })
        }

        return res.status(200).json({
            message: "Applicats found",
            job: job
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to find applications",
            success: false,
            error: error.message
        })
    }
}
const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(401).json({
                message: "Status is required",
                success: false
            })
        }

        // find application by applicant id
        const application = await Application.findById({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            })
        }

        // update status
        application.status = status.toLowerCase()
        await application.save()

        return res.status(200).json({
            message: "Status has been updated successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update status",
            success: false,
            error: error.message
        })
    }
}

export { applyToJobs, getAppliedJobs, getApplicatsForAdmin, updateStatus }