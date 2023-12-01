import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        console.log(data.coords);
        setLocation(data.coords);
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <button onClick={getCurrentLocation}>Update Location</button>
      {location && (
        <>
          <h1>Latitude : {location.latitude}</h1>
          <h1>Longitude : {location.longitude}</h1>
        </>
      )}
    </div>
  );
};

export default Location;
