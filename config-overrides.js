const { override, useEslintRc, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc(), useEslintRc());
