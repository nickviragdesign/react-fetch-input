const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'FetchInput.js',
		library: 'FetchInput',
		libraryTarget: 'umd',
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
	resolve: {
		alias: {
			react: path.resolve('./node_modules/react'),
		},
	},
	externals: {
		'React': 'react',
		'ReactDOM': 'react-dom'
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})],
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};
