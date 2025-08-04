import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

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

app.use(express.json());

//Routes

//Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

//Server Start
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
})
