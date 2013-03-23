// ============================
var WeatherVM = function (raw) {
  if (!raw) {
    throw "raw is required";
  }
  console.log(raw);

  var self = this;

  self.lastBuildDate = ko.observable();
  self.ttl = ko.observable();
  self.location = ko.observable(new Location(raw.location));
  self.wind = ko.observable(new Wind(raw.wind));
  self.units = ko.observable(new Units(raw.units));
  self.condition = ko.observable(new Condition(raw.item.condition));
  self.forecastItems = ko.observableArray(Util.toForecast(raw.item.forecast));
  self.atmosphere = ko.observable(new Atmosphere(raw.atmosphere));

};

// ============================
var Location = function (raw) {
  var self = this;
  self.city = ko.observable(raw._city);
  self.country = ko.observable(raw._country);
  self.region = ko.observable(raw._region);
};

// ============================
var Condition = function (raw) {
  var self = this;
  self.code = ko.observable(raw._code);
  self.date = ko.observable(raw._date);
  self.temp = ko.observable(raw._temp);
  self.text = ko.observable(raw._text);
  
  self.image = ko.computed(function () {
    var image = Ti.App.iconCodes[self.code()];
    return Util.makeSvg(image);
  });
};

// ============================
var Forecast = function (raw) {
  var self = this;
  raw['_temp'] = null;
  self.condition = ko.observable(new Condition(raw));
  self.high = ko.observable(raw._high);
  self.low = ko.observable(raw._low);
  self.dayOfWeek = ko.observable(raw._day);

  self.average = ko.computed(function () {
    var lowInt = parseInt(self.low());
    var highInt = parseInt(self.high());
    return Util.mean([lowInt,highInt]);
  });
};

// ============================
var Units = function (raw) {
  var self = this;
  self.temp = ko.observable(raw._temperature);
  self.distance = ko.observable(raw._distance);
  self.pressure = ko.observable(raw._pressure);
  self.speed = ko.observable(raw._speed);
};

// ============================
var Wind = function (raw) {
  var self = this;
  self.chill = ko.observable(raw._chill);
  self.direction = ko.observable(raw._direction);
  self.speed = ko.observable(raw._speed);
};

// ============================
var Atmosphere = function (raw) {
  var self = this;
  self.humidity = ko.observable(raw._humidity);
  self.visibility = ko.observable(raw._visibility);
  self.pressure = ko.observable(raw._pressure);
  self.rising = ko.observable(raw._rising);
};