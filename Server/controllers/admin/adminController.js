const dotenv = require("dotenv");
dotenv.config();

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
            console.log(`Admin Email: ${adminEmail}`);
            console.log(`Admin Password: ${adminPassword}`);
            const accessToken = 'sampleAccessToken'; 
            const refreshToken = 'sampleRefreshToken'; 
            return res.status(200).json({ success: true, message: "Login successful", accessToken, refreshToken });
        } else {
            return res.status(403).json({ success: false, message: "Invalid Username or Password" });
        }
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    adminLogin,
}
