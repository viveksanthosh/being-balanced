import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import "dotenv/config";

import routes from "./routes";
import "./database";

export const app = express();
app.use(helmet());

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);
