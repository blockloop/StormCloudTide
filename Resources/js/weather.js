var Weather = {

  addTimezone: function (timezone) {
    // TODO
  },

  removeTimezone: function (timezone) {
    // TODO
  },

  pullWeather: function () {
    // body...
  },

  test: function (url) {
    var client = Ti.Network.createHTTPClient();
    client.onload = function(e) {
      var xmlStr = this.responseText;
      var jsonObj = x2js.xml_str2json(xmlStr);
      window.currentWeather = new WeatherCondition(jsonObj.rss.channel);
    };
    client.onerror = function(e) {
      console.log(e);
    };
    client.open('GET',url);
    client.send();
  }
}



/*
http://developer.yahoo.com/weather/
Code  Description
0 tornado
1 tropical storm
2 hurricane
3 severe thunderstorms
4 thunderstorms
5 mixed rain and snow
6 mixed rain and sleet
7 mixed snow and sleet
8 freezing drizzle
9 drizzle
10  freezing rain
11  showers
12  showers
13  snow flurries
14  light snow showers
15  blowing snow
16  snow
17  hail
18  sleet
19  dust
20  foggy
21  haze
22  smoky
23  blustery
24  windy
25  cold
26  cloudy
27  mostly cloudy (night)
28  mostly cloudy (day)
29  partly cloudy (night)
30  partly cloudy (day)
31  clear (night)
32  sunny
33  fair (night)
34  fair (day)
35  mixed rain and hail
36  hot
37  isolated thunderstorms
38  scattered thunderstorms
39  scattered thunderstorms
40  scattered showers
41  heavy snow
42  scattered snow showers
43  heavy snow
44  partly cloudy
45  thundershowers
46  snow showers
47  isolated thundershowers
3200  not available
*/

