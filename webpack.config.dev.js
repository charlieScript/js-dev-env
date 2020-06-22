import { path } from "path";

module.exports = {
	debug: true,
	devtool: "inline-source-map",
	noInfo: false,
	target: "web",
	entry: {
		path: path.resolve(__dirname, "src/index")
	},
	output: {
		path: path.resolve(__dirname, "src"),
		pubicPath: "/",
		filename: "bundle.js"
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	}
};
