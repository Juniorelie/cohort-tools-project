const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const studentSchema = new Schema({
  firstName: { type: string, required: true },
  lastName: { type: string, required: true },
  email: { type: string, required: true, unique: true },
  phone: { type: string, required: true },
  linkedinUrl: { type: string, default: "" },
  languages: {
    type: String,
    enum: [
      "English",
      "Spanish",
      "French",
      "German",
      "Portuguese",
      "Dutch",
      "Other",
    ],
  },
  program: {
    type: String,
    enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"],
  },
  background: { type: string, default: "" },
  image: { type: string, default: "https://i.imgur.com/r8bo8u7.png" },
  cohort: ObjectId,
  projects: Array,
});

const Student = mongoose.model("Student", studentSchema);
// EXPORT THE MODEL
module.exports = Student;
