$(function () {
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
	}

};