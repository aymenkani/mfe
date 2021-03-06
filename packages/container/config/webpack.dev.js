const { merge }  = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonCOnfig = require('./webpack.common');
const packageJson = require('../package.json');

// test 2
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonCOnfig, devConfig)