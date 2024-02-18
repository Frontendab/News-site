"use client";
import { useEffect } from "react";

function HandlingBootstrapJs() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}

export default HandlingBootstrapJs;
