import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  rollno: { type: String, required: true, unique: true }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
