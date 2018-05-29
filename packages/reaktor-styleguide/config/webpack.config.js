// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const autoprefixer = require('autoprefixer');
// const ExtractPlugin = require('mini-css-extract-plugin');

// const dev = process.env.NODE_ENV === 'development';

// module.exports = {
//   entry: [/*'babel-polyfill',*/ 'normalize.css', './src'],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           dev ? 'style-loader' : ExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//               modules: true,
//               localIdentName: '[name]__[local]__[hash:base64:5]',
//             },
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               ident: 'postcss',
//               plugins: () => [
//                 require('postcss-flexbugs-fixes'),
//                 autoprefixer({
//                   flexbox: 'no-2009',
//                 }),
//               ],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           dev ? 'style-loader' : ExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               sourceMap: true,
//               importLoaders: 2,
//               localIdentName: '[name]__[local]__[hash:base64:5]',
//             },
//           },
//           'sass-loader',
//           {
//             loader: 'postcss-loader',
//             options: {
//               ident: 'postcss',
//               plugins: () => [
//                 require('postcss-flexbugs-fixes'),
//                 autoprefixer({
//                   flexbox: 'no-2009',
//                 }),
//               ],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: ['file-loader'],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//     ],
//   },
//   output: {
//     path: path.join(__dirname, '..', 'dist'),
//     filename: 'bundle.js',
//   },
//   plugins: [new ExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }) /* , new HtmlWebpackPlugin()*/],
//   mode: dev ? 'development' : 'production',
//   externals: { react: 'commonjs react' },
// };
