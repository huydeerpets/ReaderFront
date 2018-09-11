import path from 'path';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

// Config
const config = {
  entry: {
    app: './src/setup/client/index.js'
  },

  output: {
    path: path.join(__dirname, 'public', 'js', 'bundles'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  cache: true,

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  plugins: [
    new Dotenv(),
    new HardSourceWebpackPlugin({
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock', '.env']
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  node: {
    fs: 'empty'
  }
};

export default config;
