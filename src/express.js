import express from "express";
import graphqlServer from "./graphql";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

graphqlServer.applyMiddleware({ app, path: "/graphql" });

app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
});

export default { app, server: graphqlServer };
