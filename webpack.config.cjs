const path = require("path");

module.exports = {
  entry: "./src/server/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "server-tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "server.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
};
