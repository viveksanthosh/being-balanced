import express from "express";
import "dotenv/config";

import routes from "./routes";

import "./database";

export const app = express();
app.use("/api", routes);
