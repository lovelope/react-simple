/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const {
  addWebpackExternals,
  override,
  useBabelRc,
  useEslintRc,
} = require('customize-cra');

module.exports = override(
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM',
  }),
  useBabelRc(),
  useEslintRc()
);
