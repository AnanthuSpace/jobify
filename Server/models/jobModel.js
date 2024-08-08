const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String], 
    required: true,
  },
  skills: {
    type: [String], 
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Jobs = mongoose.model('Jobs', jobSchema);
module.exports = Jobs;
