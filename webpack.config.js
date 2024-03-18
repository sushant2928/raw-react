const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // Set to 'production' for optimized build
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your existing index.html
      filename: "index.html", // Output filename for the copied HTML
      path: path.resolve(__dirname, "dist"),
    }),
  ],
};
