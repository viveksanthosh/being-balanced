import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "./express-plugin";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
  plugins: [react(), express("src/server"), sassDts()],
});
