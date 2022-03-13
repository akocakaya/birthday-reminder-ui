const path = require('path');

module.exports = {
    mode: 'development',

    // tell webpack the root file of our server app
    entry: path.resolve(__dirname, 'src/client/index.js'),

    // tell webpack where to put the output file
    // that is generated
    output: {
        filename    : 'bundle.js',
        path        : path.resolve(__dirname, 'public'),
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
}
