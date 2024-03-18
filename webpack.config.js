const path = require("path");

module.exports = {
  mode: "development", // Set to 'production' for optimized build
  entry: "./src/index.js", // Your app's entry point
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory for bundled JS
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
