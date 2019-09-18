const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		index: path.resolve(__dirname, './src/index.html')
	},
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000, //bytes
						name: '[hash:7].[ext]',
						outputPath: 'assets'
					}
				}
			},
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({template: './index.html'}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		})
  ]
};