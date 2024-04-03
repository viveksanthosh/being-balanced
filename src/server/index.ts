import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import "dotenv/config";
import path from "path";
import fs from "fs";

import routes from "./routes";
import "./database";

export const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use("/assets", express.static(path.join(__dirname, "/assets")));
  app.use("/images", express.static(path.join(__dirname, "/images")));

  const html = fs.readFileSync(path.join(__dirname, "index.html")).toString();

  app.use("*", (_req, res) => {
    res.send(html);
  });

  app.listen(3000, () => {
    console.log("started");
  });
}
