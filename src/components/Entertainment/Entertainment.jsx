"use client";
import styles from "./_Entertainment.module.scss";
import { useEffect, useState } from "react";
import { apiKey } from "@/API/Apikey";
import Link from "next/link";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "../Top headlines/TopHeadlines";

const Entertainment = () => {
  let domain = "cnn.com";
  const [news, setNews] = useState();
  const getData = async () => {
    let api = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}`;
    let res = await fetch(api);
    let data = await res.json();
    setNews(data.articles);
  };
  useEffect(() => {
    getData();
  }, [domain]);

  let categoriesName = ["Hollywood", "Bollywood", "Entertainment"];

  const CreateDownNewsInEntertainment = () => {
    if (news) {
      return (
        <>
          {news.map((post, i) => {
            if (i + 1 <= 3) {
              return (
                <Link
                  key={i}
                  href={`/news/${post.author}/${domain}/${filterTitle(
                    post
                  )}/${i}`}
                  className={`${styles.single_news} col-sm-12 col-md-6 col-lg-4`}
                  style={{ width: "432px" }}
                >
                  <div className="row container p-0 px-2">
                    <div
                      className={`${styles.img} col-4 divBgImg`}
                      style={{
                        height: "100px",
                        background: `url(${post.urlToImage})`,
                        objectFit: "scale-down",
                      }}
                    >
                      <p className={`${styles[categoriesName[i]]} m-0`}>
                        {categoriesName[i]}
                      </p>
                    </div>
                    <div className={`${styles.text} col-8`}>
                      <p className="m-0" style={{ color: "#ccc" }}>
                        <small style={{ color: "black" }}>
                          {post.author ? post.author.slice(0, 22) : ""}
                        </small>{" "}
                        {getDayAndMonthAndYear(post)}{" "}
                      </p>
                      <p className="m-0">{`${post.title.slice(0, 65)}...`}</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </>
      );
    }
  };

  return (
    <div className="container p-0">
      <header className={styles.header}>
        <h2 className="m-0">Entertainment</h2>
      </header>
      <br />
      <section className="content">
        <div
          className="divBgImg cover"
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(https://assets.editorial.aetnd.com/uploads/2017/08/palestine-ap_327669110451.jpg), lightgray 50%`,
          }}
        >
          <div className={styles.parentInfoTextImg}>
            <p className={styles.titleCategory}>For freedom</p>
          </div>
          <div className={styles.info}>
            <h1>Palestine Liberation: Challenges and Opportunities</h1>
            <h5>
              Inshallah, Palestine will be liberated, whether today, tomorrow,
              or in the days to come. This goal will be achieved, by the grace
              of Allah.
            </h5>
          </div>
          <br />
        </div>
      </section>
      <div
        className={`container p-0 ${styles.news} d-flex align-items-center justify-content-between my-3`}
        style={{ position: "relative" }}
      >
        <div className={`${styles.content} row`}>
          <CreateDownNewsInEntertainment />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
