module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      ['module-resolver', { alias: { '~': './src' } }],
      'istanbul',
      'react-native-reanimated/plugin' // this plugin must stay last
    ]
  }
}
