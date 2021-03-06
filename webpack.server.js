const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    // inform webpack that we are building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    // tell webpack the root file of our server app
    entry: path.resolve(__dirname, 'src/server/index.js'),

    // tell webpack where to put the output file
    // that is generated
    output: {
        filename    : 'bundle.js',
        path        : path.resolve(__dirname, 'build'),
    },

    // tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test       : /\.js?$/,
                loader     : 'babel-loader',
                exclude    : /node_modules/,
                options: {
                    presets: [
                        'react', // going to change jsx file to js function calls
                        'stage-0', // going to handle async code
                        [
                            'env', // handle last 2 browser versions
                            {
                                targets: {
                                    browsers: ['last 2 versions'],
                                },
                            },
                        ],
                    ],
                },
            },
        ],
    },

    // tell webpack to not bundle any libraries into our output bundle 
    // on the server if that library exist inside the node module folder
    externals: [
        webpackNodeExternals(),
    ],
};
