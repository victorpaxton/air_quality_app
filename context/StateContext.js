import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [location, setLocation] = useState({
    city: 'My Location',
    country: 'Ho Chi Minh City, Vietnam',
  });
  const [pin, setPin] = useState({ lon: 106.6297, lat: 10.8231 });

  const changeDefaultLocation = (location, pin) => {
    setPin({ lon: pin.lon, lat: pin.lat });
    setLocation({
      city: location.city,
      country: location.country,
      id: location.id,
    });
  };

  return (
    <Context.Provider value={{ location, pin, changeDefaultLocation }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
