const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    watch: process.env.NODE_ENV === 'development',
    entry: ['./resources/js/app.js', './resources/scss/app.scss'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            api: 'modern-compiler',
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '../dist/app.min.css' })
    ]
};