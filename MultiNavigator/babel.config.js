module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": './src/components',
          "@utils": './src/utils',
          "@screens": './src/screens',
          "@theme": './src/theme',
          "@navigation": './src/navigation',
        },
      },
    ],
  ],
};
