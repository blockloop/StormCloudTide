// ============================
var WeatherCondition = function (raw) {
  if (!raw) {
    throw "raw is required";
  }
  console.log(raw);

  var self = this;

  self.lastBuildDate = ko.observable();
  self.ttl = ko.observable();
  self.location = ko.observable(new Location(raw.location));
  self.units = ko.observable();
  self.condition = ko.observable(new Condition(raw.item.condition));
  self.forecast = ko.observable(new Forecast(raw.item.forecast));

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
    var sql = String.format("SELECT image_path FROM icon_definitions where id = {0}", self.code);
    return window.DB.executeGetScalar(sql);
  });
};

// ============================
var Forecast = function (raw) {
  var self = this;

};

