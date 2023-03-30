import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const weatherFetch = (lonlat) => {
  const [weatherData, setWeatherData] = useState([]);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: lonlat },
    headers: {
      'X-RapidAPI-Key': '98ec45d1cemsh5c7a78126905c3ap1d868cjsned76057a5cf9',
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
  }, []);

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
      'X-RapidAPI-Key': '5a43fdee18msh13d92bfb94cde38p1b6aa4jsn74f2ec25d2fd',
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
  }, []);

  const refetch = () => {
    setIsAirLoading(true);
    fetchData();
  };

  return { airData, isAirLoading, airError, refetch };
};

export { weatherFetch, currentAirFetch };
