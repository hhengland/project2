document.getElementById("newsSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("newsInput").value;
  if (value === "")
    return;
  console.log(value);


  //const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=1f2d6face76e4a4aa025fb39e0303cbe";
  const url = 'http://newsapi.org/v2/everything?' + 'q=' + value + '&' + 'from=2020-02-23&' + 'sortBy=popularity&' + 'apiKey=1f2d6face76e4a4aa025fb39e0303cbe';
  fetch(url)
    .then(function(response) {
      //console.log(response.json());

      return response.json();
    }).then(function(json) {
      let results = "";

      for(let i=1; i < 10; i++) {
      results += '<h2>Source: ' + json.articles[i].source.name +'</h2>'
      results += "<p>"
      results += '<h4>Title: ' + json.articles[i].title +'</h4>'
      results += "<p>"
      results += '<p>Author: ' + json.articles[i].author +'</p>'
      results += "<p>"
      results += '<p>Description: ' + json.articles[i].description +'</p>'
      results += "<p>"
      results += '<p>URL: ' + json.articles[i].url + '</p>'
      results += "<p>"
      //results += '<img src=' + json.articles[i].urlToImage + '/>';
      //results += "<p>"
    }

      document.getElementById("newsResults").innerHTML = results;
});

    //}).then(function(json) {
/*
      let results = "";
      results += '<h2>Weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>Temp: ' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      results += '<h3>Feels Like: ' + json.main.feels_like + " &deg;F</h2>"
      results += "<p>"
      results += '<h3>Temp Min: ' + json.main.temp_min + " &deg;F</h2>"
      results += "<p>"
      results += '<h3>Temp Max: ' + json.main.temp_max + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
});
//fetching the weather forcast
      const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=7dc63bcc9f5875534db4744dbc542c45";
      fetch(url2)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
//formatting what it looks like
*/
/*          let news = "";
          for (let i=0; i < json.list.length; i++) {
    	news += "<h2>" + json.list[i].articles.source + "</h2>";
    	news += "<p>Author: " + json.list[i].articles.author + "</p>";
    	//articles += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      news += "<p>Title: " + json.list[i].articles.title + "</p>";
          }
          document.getElementById("newsResults").innerHTML = news;
        });
*/

    });
