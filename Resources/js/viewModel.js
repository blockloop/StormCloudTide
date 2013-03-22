
var ViewModel = function () {
	var self = this;
	self.currentWeather = ko.observable(null);
	self.settings = ko.observable(null);
	self.units = ko.observable(null);
	
	self.prettyLocation = ko.computed(function () {
		var result = "";
		try {
			var loc = self.currentWeather().location();
			result = String.format("{0}, {1}", loc.city(), loc.region());
		} catch (e) {}
		return result;
	});
};