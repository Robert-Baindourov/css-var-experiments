
module.exports = {
  mode: 'production',
  bail: true, // Fail out on the first error instead of tolerating it.
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: 'build',
    publicPath: 'static',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {              
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    usedExports: true,   
    nodeEnv: 'production',
    sideEffects: true,
    moduleIds: 'hashed',
    concatenateModules: true,
    runtimeChunk: {
      name: 'runtime',
    },
    
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      cacheGroups: {        
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          chunks: 'all',
        },
        
        commons: {
          name: 'commons', 
          chunks: 'initial',
          minChunks: 2, 
        },
      },
    },
    
  },
  
}
