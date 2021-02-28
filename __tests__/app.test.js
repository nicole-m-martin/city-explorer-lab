require('dotenv').config();

const { locationFormat, weatherFormat, yelpFormat } = require('../lib/functions');
const fakeRequest = require('supertest');


describe('app routes', () => {
  describe('routes', () => {
    
    
    // LOCATION TEST
    test('returns city location', async() => {

      const expectation = 
        {
          formatted_query: 'Portland, San Patricio County, Texas, USA',
          latitude: '27.8768086', 
          longitude: '-97.3233874'
        };

      const actual = [
        {
          lat: '27.8768086',
          lon: '-97.3233874',
          display_name: 'Portland, San Patricio County, Texas, USA',
          class: 'place',
          type: 'city',
          importance: 0.54410058492494,
          icon: 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
        }];

      const data = locationFormat(actual);

      expect(data).toEqual(expectation);
    });
  });


  // WEATHER TEST
  test('returns city weather', async() => {

    const expectation = [
      {
        forecast: 'Light rain',
        time: 'Sun May 17 2020'
      }];

    const actual = {
      data: [  
        {
          moonrise_ts: 1589712747,
          wind_cdir: 'WSW',
          rh: 98,
          pres: 894.563,
          high_temp: 14.3,
          sunset_ts: 1589772945,
          ozone: 358.214,
          moon_phase: 0.128436,
          wind_gust_spd: 6.80768,
          snow_depth: 0,
          clouds: 100,
          ts: 1589698860,
          sunrise_ts: 1589719067,
          app_min_temp: 3.1,
          wind_spd: 1.92786,
          pop: 85,
          wind_cdir_full: 'west-southwest',
          slp: 1011.93,
          moon_phase_lunation: 0.84,
          valid_date: '2020-05-17',
          app_max_temp: 3.8,
          vis: 8.44974,
          dewpt: 6.4,
          snow: 0,
          uv: 1.26003,
          weather: {
            'icon': 'r01d',
            'code': 500,
            'description': 'Light rain'
          }
        }
      ]
    };

    const data = weatherFormat(actual);

    expect(data).toEqual(expectation);
  });
});

// YELP TEST
// test('returns city yelp businesses', async() => {

//   const expectation = [
//     {
//       forecast: 'Light rain',
//       time: 'Sun May 17 2020'
//     }];

//   const actual = {
//     data: [  
//       {
//         moonrise_ts: 1589712747,
//         wind_cdir: 'WSW',
//         rh: 98,
//         pres: 894.563,
//         high_temp: 14.3,
//         sunset_ts: 1589772945,
//         ozone: 358.214,
//         moon_phase: 0.128436,
//         wind_gust_spd: 6.80768,
//         snow_depth: 0,
//         clouds: 100,
//         ts: 1589698860,
//         sunrise_ts: 1589719067,
//         app_min_temp: 3.1,
//         wind_spd: 1.92786,
//         pop: 85,
//         wind_cdir_full: 'west-southwest',
//         slp: 1011.93,
//         moon_phase_lunation: 0.84,
//         valid_date: '2020-05-17',
//         app_max_temp: 3.8,
//         vis: 8.44974,
//         dewpt: 6.4,
//         snow: 0,
//         uv: 1.26003,
//         weather: {
//           'icon': 'r01d',
//           'code': 500,
//           'description': 'Light rain'
//         }
//       }
//     ]
//   };

//   const data = weatherFormat(actual);

//   expect(data).toEqual(expectation);
// });
// });















