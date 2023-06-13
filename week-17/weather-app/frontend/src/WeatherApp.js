import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';
import Search from '../src/assets/Images/search.png';
import Clouds from '../src/assets/Images/clouds.png';
import Humidity from '../src/assets/Images/humidity.png';
import Speed from '../src/assets/Images/speed.png';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forecastDays, setForecastDays] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMoment, setSelectedMoment] = useState('');
  const [filteredForecastData, setFilteredForecastData] = useState([]);
  const [showFilterInputs, setShowFilterInputs] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [showFilteredForecast, setShowFilteredForecast] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = () => {
    setLoading(true);
    setError('');
    setWeatherData(null);
    setSelectedCity('');
    setFilteredForecastData([]);
    setShowFilteredForecast(false);
    setShowFilterInputs(false); // Add this line to hide the filter inputs
  
    if (!city) {
      setError('Please enter a city name');
      setLoading(false);
      return;
    }
  
    axios
      .get(`http://localhost:3000/api/current/${city}`)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
        setSelectedCity(city);
      })
      .catch((error) => {
        setError('Something went wrong, please try again later');
        setLoading(false);
        console.error(error);
      });
  };
  


  const handleForecastDaysChange = (e) => {
    setForecastDays(parseInt(e.target.value));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleMomentChange = (e) => {
    setSelectedMoment(e.target.value);
  };

  const handleFilterData = () => {
    setError('');
    if (!selectedCity || !selectedDate || !selectedMoment) {
      setError('Please select city, date, and moment to filter the data');
      return;
    }

    setLoadingFilter(true);
    axios
      .get(
        `http://localhost:3000/api/forecast/details?city=${selectedCity}&date=${selectedDate}&moment=${selectedMoment}`
      )
      .then((response) => {
        setFilteredForecastData(response.data?.slice(0, 1));
        setShowFilteredForecast(true);
        setLoadingFilter(false);
      })
      .catch((error) => {
        setError('Something went wrong, please try again later');
        setLoadingFilter(false);
        console.error(error);
      });
  };

  const toggleFilterInputs = () => {
    setShowFilterInputs(!showFilterInputs);
    setFilteredForecastData([]);
    setShowFilteredForecast(false);
  };

  const handleBackButtonClick = () => {
    setShowFilteredForecast(false);
    setShowFilterInputs(true);
    setFilteredForecastData([]);
  };

  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
          <input
            type='text'
            id='city'
            value={city}
            onChange={handleInputChange}
            className='form-control'
            placeholder='Enter city name'
          />
          <button onClick={handleGetWeather} className='btn btn-primary'>
            <img src={Search} alt='' />
          </button>
        </div>

        <div className='winfo'>
          {error && <p className='error-message'>{error}</p>}
          {loading && <p className='loading-message'>Loading...</p>}
          {weatherData && (
            <>
              <img src={weatherData.iconUrl} alt='' />
              <h2 style={{ fontSize: '20px' }}>{weatherData.desc}</h2>
              <h1 style={{ fontSize: '24px' }}>
                Temperature: {weatherData.temperature}°C
              </h1>
              <h2>{selectedCity}</h2>
              <div className='details'>
                <div className='col'>
                  <img src={Humidity} alt='' />
                  <div>
                    <p style={{ margin: 0 }}>{weatherData.humidity}%</p>
                    <p style={{ margin: 0 }}>Humidity</p>
                  </div>
                </div>

                <div className='col'>
                  <img src={Speed} alt='' />
                  <div>
                    <p style={{ margin: 0 }}>{weatherData.speed} Km/h</p>
                    <p style={{ margin: 0 }}>Speed</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {weatherData && !showFilterInputs && !showFilteredForecast && (
            <button
              onClick={toggleFilterInputs}
              className='filter-button'
              style={{ marginTop: '20px' }}
            >
              Get Forecast
            </button>
          )}

          <div className='filter'>
            {showFilterInputs && !showFilteredForecast && (
              <div className='filter-form'>
                <div className='filter-control'>
                  <label htmlFor='forecastDays'>Forecast Days:</label>
                  <input
                    type='number'
                    id='forecastDays'
                    value={forecastDays}
                    onChange={handleForecastDaysChange}
                    className='form-input'
                    min={1}
                    max={7}
                  />
                </div>
                <div className='filter-control'>
                  <label htmlFor='date'>Date:</label>
                  <input
                    type='date'
                    id='date'
                    value={selectedDate}
                    onChange={handleDateChange}
                    className='form-input'
                  />
                </div>
                <div className='filter-control'>
                  <label htmlFor='moment'>Moment:</label>
                  <select
                    id='moment'
                    value={selectedMoment}
                    onChange={handleMomentChange}
                    className='form-input'
                  >
                    <option value=''>Select Moment</option>
                    <option value='morning'>Morning</option>
                    <option value='afternoon'>Afternoon</option>
                    <option value='evening'>Evening</option>
                    <option value='night'>Night</option>
                  </select>
                </div>
                {showFilterInputs && (
                  <button onClick={handleFilterData} className='filter-button'>
                    {loadingFilter ? 'Loading...' : 'Get Data'}
                  </button>
                )}
                {!selectedDate && !selectedMoment && filteredForecastData.length === 0 && (
                  <p className='error' style={{ margin: 0 }}>
                    Please select city, date, and moment to filter the data
                  </p>
                )}
              </div>
            )}

            {showFilteredForecast && (
              <div className='filtered-forecast'>
                <h3>Filtered Forecast Data</h3>
                {filteredForecastData.map((forecast) => (
                  <div key={forecast.date}>
                    <p>Date: {forecast.date}</p>
                    <p>Temperature: {forecast.temperature}°C</p>
                    <p>Humidity: {forecast.humidity}%</p>
                    <p>Speed: {forecast.speed} Km/h</p>
                  </div>
                ))}
                <button onClick={handleBackButtonClick} className='filter-button'>
                  Back
                </button>
              </div>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default WeatherApp;
