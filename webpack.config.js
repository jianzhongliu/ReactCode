var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./main.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        debug:true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new HtmlwebpackPlugin({
      title: 'Hello World app'
    }),
      new webpack.HotModuleReplacementPlugin()
    ]
};