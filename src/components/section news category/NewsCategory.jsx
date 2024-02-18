import React from "react";
import styles from "../dont miss/_don't_miss.module.scss";
import GetComponentNewLeft from "../Get the left new/getleftnew";
import GetComponentNewBetween from "../Get the between news/getheBetween";
import { Categories } from "../head categories/Categories";

const NewsCategory = ({ titleSection, categories }) => {
  return (
    <div className={`${styles.content} col-lg-9 col-12`}>
      <Categories titleSection={titleSection} categories={categories} />
      <br />
      <div className={`${styles.newsDoNotMiss}`}>
        <GetComponentNewLeft />
        <div
          style={{ position: "relative", height: "475px", paddingTop: "13px" }}
        >
          <GetComponentNewBetween />
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
