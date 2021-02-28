function locationFormat(data) {
  return {
    formatted_query: data[0].display_name,
    latitude: data[0].lat, 
    longitude: data[0].lon
  };
}

function weatherFormat(weatherData) {
  const formatResponse = weatherData.data.map(weatherItem => {
    return {
      forecast: weatherItem.weather.description,
      time: new Date(weatherItem.ts * 1000).toDateString(),
    };
  });

  const theWeather = formatResponse.slice(0, 7);
  return theWeather;
}

function yelpFormat(yelpData) {
  const yelpBizData = yelpData.businesses;
  const formatResponse = yelpBizData.map(yelpItem => {
    return {
      name: yelpItem.name,
      image_url: yelpItem.image_url, 
      price: yelpItem.price,
      rating: yelpItem.rating,
      url: yelpItem.url
    };
  });
  return formatResponse;
}



module.exports = {
  locationFormat,
  weatherFormat,
  yelpFormat
};
