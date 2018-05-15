const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const APP_ROOT = path.resolve(__dirname);
const RESOLVE_EXTENSIONS = ['*', '.js', '.jsx'];

module.exports = [
    {
        context: APP_ROOT,
        mode: 'development',
        entry: `${APP_ROOT}/app/modules/client.js`,
        output: {
            filename: 'client.js',
            path: `${APP_ROOT}/dist`
        },
        resolve: {
            modules: [APP_ROOT, 'node_modules'],
            extensions: RESOLVE_EXTENSIONS
        },
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ]
    },
    {
        context: APP_ROOT,
        mode: 'development',
        entry: `${APP_ROOT}/app/server.js`,
        output: {
            filename: 'server.js',
            path: `${APP_ROOT}/dist`
        },
        resolve: {
            modules: [APP_ROOT, 'node_modules'],
            extensions: RESOLVE_EXTENSIONS
        },
        externals: nodeExternals(),
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    }
];
