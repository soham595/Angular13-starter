// var webpack = require('webpack');
// var helpers = require('./helpers');
// var miniCssExtractPlugin = require('mini-css-extract-plugin');

// /**
//  * This is common part of webpack config, used both in development and production
//  **/
// module.exports = {
//     entry: {
//         polyfills: './src/polyfills.ts',
//         vendor: './src/vendor.ts',
//         app: './src/main.ts'
//     },

//     resolve: {
//         extensions: ['.js', '.ts', '.css', '.scss', '.webpack.js', '.web.js'],
//         symlinks: false
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 include: [
//                     helpers.root('src')
//                 ],
//                 exclude: [
//                     helpers.root('src/index.html')
//                 ],
//                 loader: 'html-loader'
//             },
//             {
//                 test: /index\.html/,
//                 include: [
//                     helpers.root('src/index.html')
//                 ],
//                 loader: 'blueimp-tmpl-loader'
//             },
//             {
//                 test: /\.(PNG|png|jpe?g|gif|svg|woff|woff2|tf|eot|ico)$/,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: "./assets/[name].[hash].[ext]"
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 exclude: [
//                     helpers.root('src')
//                 ],
//                 use: [
//                     miniCssExtractPlugin.loader,
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 include: [
//                     helpers.root('src')
//                 ],
//                 loader: 'raw-loader'
//             }
//         ]
//     },

//     optimization: {
//         splitChunks: {
//             cacheGroups: {
//                 vendors: {
//                     test: /[\\/]node_modules[\\/]/,
//                     name: 'vendors',
//                     chunks: 'all'
//                 },
//                 polyfills: {
//                     test: /[\\/]polyfills[\\/]/,
//                     name: 'polyfills',
//                     chunks: 'all'
//                 },
//             }
//         }
//     },

//     plugins: [
//         // new webpack.ProvidePlugin({
//         //     jQuery: 'jquery',
//         //     $: 'jquery',
//         //     jquery: 'jquery'
//         // }),
//         new webpack.ContextReplacementPlugin(
//             /(.+)?angular(\\|\/)core(.+)?/,
//             helpers.root('src')
//         ),
//         // new webpack.LoaderOptionsPlugin({
//         //     options: {
//         //         packages: {
//         //             moment: {
//         //                 map: 'node_modules/moment/moment.js',
//         //                 type: 'cjs',
//         //                 defaultExtension: 'js'
//         //             }
//         //         }
//         //     }
//         // })
//     ]
// };
