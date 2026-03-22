import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { connectDB } from "./config/connectDB.js";
import authRouter from "./routes/auth.routes.js";
import { protect } from "./middlewares/auth.middleware.js";

const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//CORS Middleware
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

connectDB()

app.use(express.json());

//Routes
app.use("/api/auth", authRouter);
// app.use("/api/sessions", sessionRoutes);
// app.use("/api/questions", questionRoutes);

// app.use("api/ai/generate-questions", protect, generateInterviewQuestions);
// app.use("api/ai/generate-explanation", protect, generateConceptExplanation);

//Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

//Server Start
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
})
