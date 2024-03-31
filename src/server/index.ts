import express from "express";
import "dotenv/config";

import "./database";

export const app = express();

app.get("/api/test", (_, res) => res.json({ greeting: "Hello" }));
