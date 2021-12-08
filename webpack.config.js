const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  target: ['web', 'es3'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          keep_fnames: true
        }
      })
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'list',
      type: 'var',
      export: 'default',
    },
  },
};
