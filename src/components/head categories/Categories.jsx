"use client";
import styles from "@/components/dont miss/_don't_miss.module.scss";
import stylesCategories from "@/components/head categories/borderCategories.module.scss";
import React, { useEffect, useState } from "react";

let domain;

if (typeof window !== "undefined") domain = localStorage.getItem("d");

export const Categories = ({ titleSection, categories }) => {
  const [domainHeadCategoriesDoNotMiss, setDomainHeadCategoriesDoNotMiss] =
    useState("cnn.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (domain) {
        setDomainHeadCategoriesDoNotMiss(domain);
      }
    }
  }, []);

  return (
    <div
      className={`${stylesCategories.first} d-flex justify-content-between align-items-center`}
    >
      <h2
        className={`${stylesCategories.do_not_miss} text-capitalize`}
        style={{ fontWeight: "600" }}
      >
        {titleSection}
      </h2>
      <div className={`${stylesCategories.first}`}>
        <ul className="d-flex gap-2 ms-3">
          {categories.map((category, i) => (
            <li
              key={category.name}
              className={`${
                i === 3 ? styles.health : styles[category.name]
              } flex-item d-flex align-items-center text-light text-capitalize`}
            >
              {category.name} {category.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
