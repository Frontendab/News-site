"use client";
import React, { createContext, useEffect, useState } from "react";

export const ContentContext = createContext();

const GetLocationCurrentUser = ({ children }) => {
  const [mensen, setMensen] = useState();
  const getLocation = () => {
    useEffect(() => {
      const successCallback = async (position) => {
        let api = `https://api-bdc.net/data/reverse-geocode-client?latitude=$${position.coords.latitude}&longitude=${position.coords.longitude}`;

        let res = await fetch(api);
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error("Failed to fetch data");
        }

        let infoLocation = await res.json();
        setMensen(infoLocation);
      };

      const errorCallback = (error) => {
        console.log(error);
      };
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);
  };

  return (
    <div>
      <div onClick={getLocation()} style={{ display: "none" }}></div>
      <ContentContext.Provider value={{ mensen }}>
        {children}
      </ContentContext.Provider>
    </div>
  );
};

export default GetLocationCurrentUser;
