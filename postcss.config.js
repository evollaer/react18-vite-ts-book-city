const postcssConfigs = require('@taoyage/configs/postcss.js');

module.exports = {
    plugins: [
        ...postcssConfigs.plugins,
    ],
};