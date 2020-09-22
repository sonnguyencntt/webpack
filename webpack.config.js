const path = require('path');
const webpack = require('webpack');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
// const VENDOR_LIBS = [
//     "axios",
//     "bootstrap",
//     "chart.js",
//     "history",
//     "popper.js",
//     "react",
//     "react-chartjs-2",
//     "react-dom",
//     "react-print",
//     "react-redux",
//     "react-router-dom",
//     "react-to-print",
//     "redux",
//     "redux-thunk",
// ]

module.exports = {
  entry :'./server/routes/index.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'server'),
        filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  optimization: {
    minimize: false
  },
  node: { __dirname: false, __filename: true}
};