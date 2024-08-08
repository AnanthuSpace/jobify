const express = require("express")
const Router = express.Router()
const adminController = require('../controllers/admin/adminController')
const { verifyToken } = require("../helpers/jwtConfig")


Router.post('/', adminController.adminLogin)
Router.post('/company-registration', verifyToken, adminController.companyRegistration)


module.exports = Router;