import express from "express";
import 'dotenv/config';
import cors from 'cors';
import noticiasRouter from "../src/routers/noticiasRouter.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/noticias", noticiasRouter);
app.use("/health", (req, res) => res.send("OK"));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
