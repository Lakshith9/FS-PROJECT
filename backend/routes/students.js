// backend/routes/students.js
import express from "express";
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("Student route is working");
});

// POST route to receive form data
router.post("/students", (req, res) => {
  const { name, email, gender, rollno } = req.body;
  console.log("Received student:", req.body);
  res.status(200).json({ message: "Student registered successfully" });
});

export default router;
