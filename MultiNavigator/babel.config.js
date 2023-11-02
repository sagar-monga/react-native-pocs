module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@navigation': './src/navigation',
          '@svgs': './src/assets/svgs',
          '@activity': './src/navigation/tabs/activity',
          '@calendar': './src/navigation/tabs/calendar',
          '@chat': './src/navigation/tabs/chat',
          '@more': './src/navigation/tabs/more',
          '@tasks': './src/navigation/tabs/tasks',
          '@teams': './src/navigation/tabs/teams',
        },
      },
    ],
  ],
};
