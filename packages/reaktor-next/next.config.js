// const webpack = require('webpack');

// // Update these to match your package scope name.
// const internalModules = /reaktor-*(?!.*node_modules)/;
// const externalModules = /node_modules(?!\/reaktor-*(?!.*node_modules))/;

// module.exports = {
//   webpack: (config, { defaultLoaders }) => {
//     config.resolve.symlinks = false;
//     config.externals = config.externals.map((external) => {
//       if (typeof external !== 'function') return external;
//       return (ctx, req, cb) => (internalModules.test(req) ? cb() : external(ctx, req, cb));
//     });
//     config.module.rules.push({
//       test: /\.+(js|jsx)$/,
//       loader: defaultLoaders.babel,
//       include: [internalModules],
//     });
//     return config;
//   },
//   webpackDevMiddleware: (config) => {
//     config.watchOptions.ignored = [config.watchOptions.ignored[0], externalModules];
//     return config;
//   },
// };
