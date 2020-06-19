const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(process.cwd(), './examples/index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: [
                    'last 2 versions',
                    'Firefox ESR',
                    '> 1%',
                    'ie >= 9',
                    'iOS >= 8',
                    'Android >= 4',
                  ],
                },
              },
            ],
          ],
          plugins: [
            // 'transform-vue-jsx',
            // 'transform-object-assign',
            // 'transform-object-rest-spread',
            // 'transform-class-properties',
          ],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'vue-style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'axx-design-vue': path.join(__dirname, '../src/index.js'),
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), './examples/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
  ],
  devServer: {
    host: 'localhost',
    port: 3002,
    // historyApiFallback: {
    //   rewrites: [{ from: /./, to: '/index.html' }],
    // },
    hot: true,
    open: true,
    inline: true
  },
  devtool: '#source-map',
};
console.log(config);
module.exports = config;
