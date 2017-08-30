module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|dist)/,
        loaders: ['babel-loader']
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1'],
      exclude: ['node_modules']
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
            'file-loader'
        ]
    },
    {
      test: /\.gif/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader?limit=10000&mimetype=image/gif"
    },
    {
      test: /\.jpg/,
      exclude: /(node_modules|bower_components)/,
      loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
      test: /\.png/,
      exclude: /(node_modules|bower_components)/,
      loader: "url-loader?limit=10000&mimetype=image/png"
    }
];