"use client";
import React, { useContext, useEffect, useState } from "react";
import { ContentContext } from "../Get info location current user/getLocation";

const GetTemperature = () => {
  const { mensen } = useContext(ContentContext);
  const [data, setData] = useState();
  useEffect(() => {
    if (mensen) {
      let { latitude, longitude } = mensen;
      (async function get() {
        let api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
        let res = await fetch(api);
        let info = await res.json();
        setData(info);
      })();
    }
  }, [mensen]);
  return (
    <>
      <p className="m-0 ms-2">{data ? data.current.temperature_2m : ""}</p>
    </>
  );
};

export default GetTemperature;
