module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	chainWebpack: config => {
		config.plugins.delete('html');
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
	},
	configureWebpack: {
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.esm.js'
			}
		},
		output: {
			jsonpFunction: 'figmaPlus'
		}
	}
};
