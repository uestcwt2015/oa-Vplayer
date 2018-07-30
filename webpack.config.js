const path = require('path');

module.exports = {
    mode: 'development',  // prod, dev
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'oa-Vplayer.js',
        publicPath: './src/assets/',
        library: 'oa-Vplayer',
        libraryTarget: 'umd'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, './src/js/')
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    }
}
