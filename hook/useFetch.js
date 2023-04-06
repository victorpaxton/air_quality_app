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

const forecastDay = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/daily',
    params: { lat: '10.75', lon: '106.67', language: 'en', units: 'metric' },
    headers: {
      'X-RapidAPI-Key': '3d083701c9mshd0309721f326facp15b8aajsnb0909ee23002',
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
    },
  };
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.daily.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export { weatherFetch, currentAirFetch, forecastDay };
