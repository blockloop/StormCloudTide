$(function () {
	window.DB = new Database("");
  window.viewModel = new ViewModel();
  ko.applyBindings(window.viewModel);
  Weather.pullWeather();
  // console.log(DB);
});