module.exports = {
    mode: "development",
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }]
    }
}
