const path = require('path'),
    WebpackShellPlugin = require('webpack-shell-plugin'),
    BabelPlugin = require('babel-webpack-plugin');
    ShakePlugin = require('webpack-common-shake').Plugin;
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const settings = {
    "entry": './src/one.js',
    "output": {
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'source-map',
    mode: "production",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [['env', {
                        targets: { browsers: ['> 0.1%'] },
                        modules: false,
                        loose: true,
                        // exclude:["transform-es2015-classes"]
                    }]]
                }
            }
        }]
    },
}
module.exports = settings;