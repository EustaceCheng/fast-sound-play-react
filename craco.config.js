module.exports = {
    // ...
    typescript: {
      enableTypeChecking: true /* (default value) */,
    },module: {
      rules: [
        {
          test: /\.mp3$/,
          loader: 'file-loader',
          query: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ],
    },
  };