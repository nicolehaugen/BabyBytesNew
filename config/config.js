//var configName = "development";


var configName = process.env.NODE_ENV;
if (configName === undefined) {
  configName = "development";
}


module.exports = require('./env/' + configName + '.js');