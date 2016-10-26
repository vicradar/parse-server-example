Parse.Cloud.define("hello", function(request, response) {
  console.log('Ran cloud function.');
  response.success("Hello world! " + (request.params.a + request.params.b));
});

Parse.Cloud.define("weather", function(request, response) {
	Parse.Cloud.httpRequest({
		url:'http://api.openweathermap.org/data/2.5/weather',
		params: {
			lat : request.params.lat,
			lon : request.params.lon,
			APPID : 'dc1112115104b4bd6cff3e1ebf7286e2'
		}
	}).then(function(httpResponse) {
		response.success(httpResponse.text);
	}, function(httpResponse) {
		response.error(httpResponse.status);
	});
});