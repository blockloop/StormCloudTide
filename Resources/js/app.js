$(function () {
	window.appWindow = Ti.UI.getCurrentWindow();
	window.DB = new Database();
	window.viewModel = new ViewModel();
	ko.applyBindings(window.viewModel);
	Weather.startUpdater({pullFirst: true});
});

var Util = {
	minutes: function (mins) {
		return (1000*60*mins);
	},

	seconds: function (secs) {
		return (1000*secs);
	},

	makeSvg: function (svgFile, fallback) {
		if (!fallback) { fallback = 'img/climacons/fallback.jpg'; }
		// return String.format('<object data="{0}" type="image/svg+xml"><img src="{1}" /></object>', svgFile, fallback);
		return String.format('<img src="{0}"/>', svgFile);
	},

	toForecast: function (raw) {
		return _.map(raw, function (item) {
			return new Forecast(item);
		});
	}



};