module.exports = {
  webpack(config) {
    config.resolve.alias['~'] = resolve(__dirname, 'src');
    return config;
  },
};
