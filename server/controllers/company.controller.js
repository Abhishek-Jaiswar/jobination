import Company from "../models/company.model.js"

const registerCompany = async (req, res) => {
    try {
        const { name, description, location } = req.body

        if (!name || !description || !location) {
            return res.status(401).json({
                message: "Company's name, location and description are required",
                success: false
            })
        }

        const company = await Company.findOne({ name })
        if (company) {
            return res.status(401).json({
                message: "This company already exists",
                success: false
            })
        }

        const newCompany = await Company.create({
            name,
            description,
            location,
            userId: req.id
        })

        return res.status(201).json({
            message: "Company registered successfully",
            company: newCompany,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to register company",
            error: error.message
        })
    }
}

const getCompany = async (req, res) => {
    try {
        const userId = req.id;

        const companies = await Company.find({ userId })
        if (!companies) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            })
        }

        return res.status(200).json({
            message: "Company found",
            success: true,
            companies
        })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to load company",
            success: false,
            error: error.message
        })
    }
}

const getCompanyById = async (req, res) => {
    try { 
        const companyId = req.params.id
        const company = await Company.findById(companyId); // Directly pass id to findById
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company found",
            success: true,
            company
        });
    } catch (error) {
        console.error("Error loading company:", error); // Log the error for debugging
        return res.status(500).json({
            message: "Failed to load company",
            success: false
        });
    }
};

const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const { id } = req.params; // Destructure id from req.params

        const updateData = {
            name,
            description,
            website,
            location
        };

        const company = await Company.findByIdAndUpdate(id, updateData, { new: true }); // Await the function
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company info has been updated",
            success: true,
            company
        });
    } catch (error) {
        console.error("Error updating company:", error); // Log the error for debugging
        return res.status(500).json({
            message: "Failed to update company",
            success: false,
            error: error.message
        });
    }
};

export {registerCompany, getCompany, getCompanyById, updateCompany}