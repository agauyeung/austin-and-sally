/* const withTM = require("next-transpile-modules")([
  "@sample/module-name"
]); // pass the modules you would like to see transpiled
 */
module.exports = {
/*   ...withTM(), */
  trailingSlash: true //this is to make sure that loading up URL with a path doesn't open the home page
};