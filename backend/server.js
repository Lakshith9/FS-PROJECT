import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.js"; // Make sure the path is correct

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

app.use("/", studentRoutes); // use the student routes

app.listen(5000, () => console.log("Server running on port 5000"));
