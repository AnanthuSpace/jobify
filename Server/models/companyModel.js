const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true 
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    industry: {
        type: String,
        require: true
    },
    jobsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "job"
    },
    createdAt: {
        type: Date,
        require: true
    }
})

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
