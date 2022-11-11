import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import Dotenv from 'dotenv-webpack';

const config: webpack.Configuration = {

    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "url": require.resolve("url/"),
            "buffer": require.resolve("buffer/"),
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /nodeModules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.CleanPlugin(),
        new HtmlWebpackPlugin({
            template: '/src/index.html',
            filename: 'index.html',
        }),
        new Dotenv({
            path: './.env'
        }),
    ],
};

export default config;
