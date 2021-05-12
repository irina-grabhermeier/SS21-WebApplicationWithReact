module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /.tsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.js'],
    },
};