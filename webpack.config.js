const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  entry: ['./src/assets/app/app.js'],
  output: {
		path: __dirname + "/src/assets/dist",
		filename: "main.js"
	}
};