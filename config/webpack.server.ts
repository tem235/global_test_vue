import * as path from 'path';
import * as webpack from 'webpack';
import nodeExternals from 'webpack-node-externals'

const config: webpack.Configuration = {
    mode: "production",
    target: 'node',
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /nodeModules/,
            },
        ]
    }
};

export default config;
