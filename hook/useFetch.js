import { useState, useEffect } from 'react';
import axios from 'axios';
import { AIR_API_KEY, WEATHER_API_KEY } from '@env';

const weatherFetch = (lonlat) => {
  const [weatherData, setWeatherData] = useState([]);
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: lonlat },
    headers: {
      'X-RapidAPI-Key': WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsWeatherLoading(true);

    try {
      const response = await axios.request(options);

      setWeatherData(response.data.current);
      setIsWeatherLoading(false);
    } catch (error) {
      setWeatherError(error);
      console.log(error);
    } finally {
      setIsWeatherLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lonlat]);

  const refetch = () => {
    setIsWeatherLoading(true);
    fetchData();
  };

  return { weatherData, isWeatherLoading, weatherError, refetch };
};

const currentAirFetch = (lon, lat) => {
  const [airData, setAirData] = useState([]);
  const [isAirLoading, setIsAirLoading] = useState(true);
  const [airError, setAirError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://air-quality.p.rapidapi.com/history/airquality',
    params: { lon: lon, lat: lat },
    headers: {
      'X-RapidAPI-Key': AIR_API_KEY,
      'X-RapidAPI-Host': 'air-quality.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsAirLoading(true);

    try {
      const response = await axios.request(options);

      setAirData(response.data.data[0]);

      setIsAirLoading(false);
    } catch (error) {
      setAirError(error);
      console.log(error);
    } finally {
      setIsAirLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lon, lat]);

  const refetch = () => {
    setIsAirLoading(true);
    fetchData();
  };

  console.log('fetch:', airData);

  return { airData, isAirLoading, airError, refetch };
};

export { weatherFetch, currentAirFetch };
