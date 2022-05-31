import express from "express";
import cors from "cors";
import helmet from "helmet";

import router from "./routes";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
});

export default app;
