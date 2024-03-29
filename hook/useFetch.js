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

const air24hFetch = (lon, lat) => {
  const [air24h, setAir24h] = useState([]);
  const [isAir24hLoading, setIsAir24hLoading] = useState(true);
  const [air24hError, setAir24hError] = useState(null);

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
    setIsAir24hLoading(true);

    try {
      const response = await axios.request(options);

      setAir24h(response.data.data.slice(0, 24).reverse());

      setIsAir24hLoading(false);
    } catch (error) {
      setAir24hError(error);
      console.log('air24herror: ', error);
    } finally {
      setIsAir24hLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lon, lat]);

  const refetch = () => {
    setIsAir24hLoading(true);
    fetchData();
  };

  console.log('fetch:', air24h);

  return { air24h, isAir24hLoading, air24hError, refetch };
};

const forecastDay = (lon, lat) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/daily',
    params: { lat: lat, lon: lon, language: 'en', units: 'metric' },
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
  }, [lon, lat]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export { weatherFetch, currentAirFetch, forecastDay, air24hFetch };
