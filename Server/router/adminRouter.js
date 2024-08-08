const express = require("express")
const Router = express.Router()
const adminController = require('../controllers/admin/adminController')
const { verifyToken } = require("../helpers/jwtConfig")


Router.post('/', adminController.adminLogin)
Router.post('/company-registration', verifyToken, adminController.companyRegistration)
Router.post('/job-registration', verifyToken, adminController.jobRegistration)
Router.delete('/delete-job', verifyToken, adminController.deleteJob)
Router.delete('/delete-company', verifyToken, adminController.deleteCompany)
Router.delete('/edit-company', verifyToken, adminController.editCompany)


module.exports = Router;