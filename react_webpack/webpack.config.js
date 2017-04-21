module.exports={
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test:/\.css$/, loader: 'style!css'},
            {test:/\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
        ]
    }
};

/*所有文件后面有loader的都不能省略   使用这条命令解决webpack执行错误

cnpm install  babel-plugin-transform-es2015-classes -D*/

