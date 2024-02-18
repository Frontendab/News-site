"use client";
import React, { useContext } from "react";
import { ContentContext } from "../Get info location current user/getLocation";

const GetComponentNameCityAndCountry = () => {
  const { mensen } = useContext(ContentContext);

  if (mensen) {
    return (
      <div className="city d-flex align-items-center">
        <p className="m-0">{`${mensen.countryName}, ${mensen.city}`}</p>
      </div>
    );
  }
};

export default GetComponentNameCityAndCountry;
