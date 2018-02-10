const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})],
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};
