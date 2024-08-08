const express = require("express")
const Router = express.Router()
const adminController = require('../controllers/admin/adminController')


Router.post('/', adminController.adminLogin)
// Router.post('/login', Controller.loginPost)
// Router.post('/editProfile',upload.single("newImage"),Controller.editProfile)
// Router.get('/fetchuser', Controller.fetchUserData)

module.exports = Router;