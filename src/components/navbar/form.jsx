"use client";
import styles from "./_navbar.module.scss";

import { useState } from "react";

const Form = () => {
  const [valueInputSearch, setValueInputSearch] = useState(0);

  return (
    <form
      className="d-flex"
      method="post"
      action={`search/search_on=${valueInputSearch}`}
      onSubmit={(e) => {
        e.preventDefault();
        location.pathname = `search/search_on=${valueInputSearch}`;
      }}
    >
      <input
        className={`${styles.inputSearch} form-control me-2`}
        type="search"
        placeholder="Search for"
        aria-label="Search"
        style={{ background: "transparent", border: "none" }}
        onChange={(e) => setValueInputSearch(e.target.value)}
      />
      <button type="submit" className="border-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <g clipPath="url(#clip0_3_79)">
            <path
              d="M9.0155 8.3085L11.157 10.4495L10.4495 11.157L8.3085 9.0155C7.51187 9.65411 6.521 10.0015 5.5 10C3.016 10 1 7.984 1 5.5C1 3.016 3.016 1 5.5 1C7.984 1 10 3.016 10 5.5C10.0015 6.521 9.65411 7.51187 9.0155 8.3085ZM8.0125 7.9375C8.64706 7.28494 9.00143 6.41021 9 5.5C9 3.566 7.4335 2 5.5 2C3.566 2 2 3.566 2 5.5C2 7.4335 3.566 9 5.5 9C6.41021 9.00143 7.28494 8.64706 7.9375 8.0125L8.0125 7.9375Z"
              fill="white"
              fillOpacity="0.3"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_79">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  );
};

export default Form;
