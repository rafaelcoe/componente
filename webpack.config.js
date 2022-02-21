const path = require('path');

module.exports = {
	//entrada
	entry: './src/index.js',
	//saida
	output: {
		//nome do arquivo
		filename: 'script.js',
		// pasta
		path: path.resolve(__dirname, 'dist'),
	},
	//modo produção ou desenvolvimento
	mode: 'production',
	//loader para css
	module: {
		rules: [
			//regra para css
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },

			//regra para imagem
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
		],
	},
};
