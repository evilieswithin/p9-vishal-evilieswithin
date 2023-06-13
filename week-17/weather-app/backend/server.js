const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

const OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5';

app.use(express.json());
app.use(cors());

app.get('/api/cities', async (req, res) => {
  try {
    const { name, code, page, limit } = req.query;

    const queryParams = {
      q: name || code || '',
      page: parseInt(page) || 1,
      cnt: parseInt(limit) || 10,
      appid: apiKey,
    };

    const response = await axios.get(`${OPENWEATHER_URL}/find`, {
      params: queryParams,
    });

    const weatherData = response.data.list.map((city) => ({
      name: city.name,
      code: city.id,
    }));

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.get('/api/forecast', async (req, res) => {
  try {
    const { city, days } = req.query;

    const queryParams = {
      q: city || '',
      cnt: parseInt(days) || 5,
      appid: apiKey,
    };

    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: queryParams,
      }
    );

    const forecastData = response.data.list.map((forecast) => ({
      date: forecast.dt_txt,
      temperature: forecast.main.temp,
      humidity: forecast.main.humidity,
      speed: forecast.wind.speed,
    }));

    res.json(forecastData);
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    res.status(500).json({ error: 'Failed to fetch forecast data' });
  }
});

app.get('/api/current/:city', async (req, res) => {
  try {
    const { city } = req.params;

    const queryParams = {
      q: city || '',
      appid: apiKey,
      units: 'metric',
    };

    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: queryParams,
      }
    );

    console.log(response.data);

    const currentWeatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data?.weather[0].icon}@2x.png`,
      desc: response.data?.weather[0].description,
    };

    console.log({ currentWeatherData });

    res.json(currentWeatherData);
    console.log({ currentWeatherData });
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    res.status(500).json({ error: 'Failed to fetch current weather data' });
  }
});

app.get('/api/forecast/details', async (req, res) => {
  try {
    const { city, date, moment } = req.query;

    const queryParams = {
      q: city || '',
      appid: apiKey,
      units: 'metric',
    };

    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: queryParams,
      }
    );

    const forecastData = response.data.list.filter((forecast) => {
      // Filter based on date and moment
      const forecastDate = new Date(forecast.dt_txt);
      const selectedDate = new Date(date);
      const selectedMoment = moment.toLowerCase();

      return (
        forecastDate.toDateString() === selectedDate.toDateString() &&
        getMoment(forecastDate.getHours()) === selectedMoment
      );
    });

    const detailedForecastData = forecastData.map((forecast) => ({
      date: forecast.dt_txt,
      temperature: forecast.main.temp,
      humidity: forecast.main.humidity,
      speed: forecast.wind.speed,
    }));

    res.json(detailedForecastData);
    console.log({ detailedForecastData });
  } catch (error) {
    console.error('Error fetching detailed forecast data:', error);
    res.status(500).json({ error: 'Failed to fetch detailed forecast data' });
  }
});

function getMoment(hour) {
  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon';
  } else if (hour >= 17 && hour < 20) {
    return 'evening';
  } else {
    return 'night';
  }
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
