var webpack = require('webpack');

const projectRoot = process.cwd();

var environments = {
  development: {
    resolve: {
        alias: {
            src:        `${projectRoot}/src`,
            Components: `${projectRoot}/src/components`,
            Containers: `${projectRoot}/src/containers`,
            Modules:    `${projectRoot}/src/modules`,
            Redux:      `${projectRoot}/src/redux`,
            Styles:     `${projectRoot}/src/styles`
        }
    },
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    },
    devServer: {
      inline: true,
      port: 9000,
      hot: true
    }
  },

  production: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  }
}

module.exports = environments[process.env.NODE_ENV] || environments.development;
