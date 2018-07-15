var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry:{
		app:'./src/app.ts'
	},
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				
			},
			{
				test:/\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve:{
		extensions: [ '.tsx', '.ts', '.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	output: {
    	filename: '[name].js',
    	path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js']
		})
	],
	mode: 'development'
}

