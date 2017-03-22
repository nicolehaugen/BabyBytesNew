//var configName = "development";


var configName = process.env.NODE_ENV;
console.log("test: " + configName);
if (configName === undefined) {
  configName = "development";
}


module.exports = require('./env/' + configName + '.js');