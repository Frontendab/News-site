"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../dont miss/_don't_miss.module.scss";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "../Top headlines/TopHeadlines";
import { apiKey } from "@/API/Apikey";

export const CreateNews = ({ news, domain, start, end }) => {
  if (news) {
    return (
      <>
        {news.map((post, i) => {
          if (i > start && i < end) {
            if (post.author) {
              return (
                <Link
                  key={i}
                  href={`/news/${post.author}/${domain}/${filterTitle(
                    post
                  )}/${i}`}
                  className="content row"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <div
                    className="col-3 divBgImg"
                    style={{
                      background: `url(${post.urlToImage})`,
                    }}
                  ></div>

                  <div className="info col-8 ps-3">
                    <p className="m-0" style={{ fontSize: "11px" }}>
                      {post.author.slice(0, 22)} {getDayAndMonthAndYear(post)}
                    </p>
                    <p
                      className="m-0"
                      style={{ fontSize: "14px" }}
                    >{`${post.title.slice(0, 50)}...`}</p>
                  </div>
                </Link>
              );
            }
          }
        })}
      </>
    );
  }
};
const Last = () => {
  const [index, setIndex] = useState(1);
  let domain = "cnn.com";
  if (index === 1) {
    domain = "cnn.com";
  } else if (index === 2) {
    domain = "wionews.com";
  } else if (index === 3) {
    domain = "apnews.com";
  }

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

  return (
    <div className={styles.Last}>
      <header className="pt-2">
        <ul className="p-0 d-flex align-items-center justify-content-between">
          <li className={`${index === 1 ? styles.active : ""}`}>Recent</li>
          <li className={`${index === 2 ? styles.active : ""}`}>Trending</li>
          <li className={`${index === 3 ? styles.active : ""}`}>Most Views</li>
        </ul>
      </header>
      <br />

      <div className="container p-0 d-flex" style={{ width: "300px" }}>
        <div
          className={`${index === 1 ? "d-block" : "d-none"}`}
          style={{ height: index === 1 ? "470px" : "" }}
        >
          {<CreateNews news={news} domain={domain} start={0} end={7} />}
        </div>
        <div
          className={`${index === 2 ? "d-block" : "d-none"}`}
          style={{ height: index === 2 ? "470px" : "" }}
        >
          {<CreateNews news={news} domain={domain} start={9} end={16} />}
        </div>
        <div
          className={`${index === 3 ? "d-block" : "d-none"}`}
          style={{ height: index === 3 ? "470px" : "" }}
        >
          {<CreateNews news={news} domain={domain} start={15} end={22} />}
        </div>
      </div>
      <br />
      <div className={`text-right pt-2 ${styles.parentBtnNextAndPrev}`}>
        <button
          style={{
            pointerEvents: index === 1 ? "none" : "auto",
            background: index === 1 ? "#fa9696" : "",
          }}
          onClick={() => {
            if (index > 1) {
              setIndex((index) => index - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.99998 12L13.243 7.75696L14.657 9.17196L11.828 12L14.657 14.828L13.243 16.243L8.99998 12Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          style={{
            pointerEvents: index === 3 ? "none" : "auto",
            background: index === 3 ? "#fa9696" : "",
          }}
          onClick={() => {
            if (index <= 3) {
              setIndex((index) => index + 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 12L10.757 16.243L9.34302 14.828L12.172 12L9.34302 9.17204L10.757 7.75704L15 12Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Last;
