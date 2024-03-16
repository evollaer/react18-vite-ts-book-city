const postcssConfigs = require('@taoyage/configs/postcss.js');

module.exports = {
  plugins: [
    ...postcssConfigs.plugins,
    require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'], selectorBlackList: ['html'] }),
  ],
};
