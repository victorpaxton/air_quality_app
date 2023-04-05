import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const weatherFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "10.8231,106.6297" },
    headers: {
      "X-RapidAPI-Key": "98ec45d1cemsh5c7a78126905c3ap1d868cjsned76057a5cf9",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.current);
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

const currentAirFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://air-quality.p.rapidapi.com/history/airquality",
    params: { lon: "106.6297", lat: "10.8231" },
    headers: {
      "X-RapidAPI-Key": "ed5cc6ba84msh0c79f2e310946e8p101108jsn35683851fabb",
      "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data[0]);
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
const forecastDay = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/daily",
    params: { lat: "10.75", lon: "106.67", language: "en", units: "metric" },
    headers: {
      "X-RapidAPI-Key": "3d083701c9mshd0309721f326facp15b8aajsnb0909ee23002",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
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
