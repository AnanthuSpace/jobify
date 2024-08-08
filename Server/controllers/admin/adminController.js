const dotenv = require("dotenv");
dotenv.config();
const { generateAccessToken } = require("../../helpers/jwtConfig");
const Company = require('../../models/companyModel')


const adminLogin = async (req, res) => {

    const { email, password } = req.body;
    const enterdEmail = email.trim();
    const enterdPassword = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (enterdEmail === "" || enterdPassword === "") {
        return res.status(401).json({ success: false, message: "All the fields are required!" });
    } else if (!emailRegex.test(enterdEmail)) {
        return res.status(401).json({ success: false, message: "Invalid email format!" });
    } else if (enterdPassword.length < 6) {
        return res.status(401).json({ success: false, message: "Password must be at least 6 characters long!" });
    }
    try {

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASS;

        if (enterdEmail === adminEmail && enterdPassword === adminPassword) {
            console.log(adminEmail);

            let adminAccessToken = generateAccessToken(adminEmail)

            const accessToken = adminAccessToken;

            const companyData = await Company.find({}, { _id: 0 })

            return res.status(200).json({ success: true, message: "Login successful", accessToken, companyData });
        } else {
            return res.status(403).json({ success: false, message: "Invalid Username or Password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const companyRegistration = async (req, res) => {
    try {

        const { name, description, location, website, industry } = req.body

        const existingCompany = await Company.findOne({ name });
        if (existingCompany) {
            return res.status(409).json({ success: false, message: "Company already exists" });
        }

        const newCompany = new Company({
            name: name,
            description: description,
            location: location,
            website: website,
            industry: industry,
            createdOn: new Date(),
        })

        const responds = await newCompany.save()
        const companyData = await Company.find({}, { _id: 0 })
        if (responds) {
            return res.status(200).json({ success: true, message: "Registration successful", companyData });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}


module.exports = {
    adminLogin,
    companyRegistration
}
