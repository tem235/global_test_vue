import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import merge from 'webpack-merge'
import common from './webpack.common'

const devConfig: webpack.Configuration = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})


export default devConfig;
