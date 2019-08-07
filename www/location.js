var cordova = require('cordova');

function LocationPlugin() {
}

LocationPlugin.prototype.getLocation = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "LocationPlugin", "getlocation", []);
};

LocationPlugin.prototype.stopLocation = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "LocationPlugin", "stoplocation", []);
};

module.exports = new LocationPlugin();
