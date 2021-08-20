const withTM = require("next-transpile-modules")([
  "@ui5/webcomponents",
  "@ui5/webcomponents-base",
  "@ui5/webcomponents-fiori",
  "@ui5/webcomponents-icons",
  "@ui5/webcomponents-react",
]); // pass the modules you would like to see transpiled

module.exports = {
  ...withTM(),
  trailingSlash: true //this is to make sure that loading up URL with a path doesn't open the home page
};
