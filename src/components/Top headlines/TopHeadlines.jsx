"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/_page.module.scss";
import Link from "next/link";
import { months } from "../navbar/navbar";
import { apiKey } from "@/API/Apikey";

export const getDayAndMonthAndYear = (post) => {
  let datePush = Array.from(post.publishedAt);

  let firstDash = datePush.indexOf("-");
  let secondDash = datePush.indexOf("-", firstDash + 1);
  let t = datePush.indexOf("T", secondDash);

  let day = datePush.slice(secondDash + 1, t).join("");
  let monthIndex = datePush.slice(firstDash + 1, secondDash).join("");
  let monthName = "";
  let year = datePush.slice(0, firstDash).join("");

  months.forEach((name, i) => {
    if (i === +monthIndex - 1) monthName = name;
  });

  return `- ${day} ${monthName} ${year}`;
};
export const filterTitle = (post) => {
  let title = Array.from(post.title);
  let index = title.filter((w) => w !== "?");
  return index.join("");
};

const TopHeadlines = () => {
  let domain = "aljazeera.com";

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

  const GetTowHeadLine = () => {
    if (news) {
      return (
        <>
          {news.map((post, i) => {
            if (i > 1 && i < 4) {
              return (
                <>
                  <Link
                    key={i}
                    href={`/news/${post.author}/${domain}/${filterTitle(
                      post
                    )}/${i}`}
                    className="divBgImg"
                    style={{
                      position: "relative",
                      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post.urlToImage}), lightgray 50%`,
                      width: "50%",
                      height: "calc(570px / 2)",
                    }}
                  >
                    <div>
                      <span
                        className={`${i > 1 && i < 3 ? `${styles.c2}` : ""} ${
                          i > 2 && i < 4 ? `${styles.c3}` : ""
                        }`}
                      >
                        business
                      </span>
                      <div className={`${styles.info_post} pe-1`}>
                        <p
                          className="text-capitalize"
                          style={{
                            marginBottom: "8px",
                            fontSize: "13px",
                          }}
                        >
                          {post.author} {getDayAndMonthAndYear(post)}
                        </p>
                        <h5
                          className="text-capitalize"
                          style={{
                            fontSize: "13px",
                            lineHeight: "19.2px",
                            fontWeight: 300,
                          }}
                        >
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </>
              );
            }
          })}
        </>
      );
    }
  };
  const GetOneHeadLine = () => {
    if (news) {
      return (
        <>
          {news.map((post, i) => {
            if (i === 7) {
              return (
                <Link
                  key={i}
                  href={`/news/${post.author}/${domain}/${filterTitle(
                    post
                  )}/${i}`}
                  className="divBgImg"
                  style={{
                    position: "absolute",
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post.urlToImage}), lightgray 50%`,
                    width: "100%",
                    height: "270px",
                    marginTop: "15px",
                  }}
                >
                  <div>
                    <span className={`${styles.c4}`}>business</span>
                    <div className={`${styles.info_post}`}>
                      <p
                        className="text-capitalize"
                        style={{
                          fontSize: "14px",
                          marginBottom: "10px",
                        }}
                      >
                        {post.author} {getDayAndMonthAndYear(post)}
                      </p>
                      <h5
                        className="text-capitalize"
                        style={{
                          fontSize: "18px",
                          lineHeight: "unset",
                          fontWeight: 300,
                        }}
                      >
                        {post.title}
                      </h5>
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

  if (news) {
    return (
      <>
        {news.map((post, i) => {
          if (i === 1) {
            return (
              <>
                <Link
                  key={i}
                  href={`/news/${post.author}/${domain}/${filterTitle(
                    post
                  )}/${i}`}
                  className={`${styles.firstNewsSingle} col-lg-7 col-12 divBgImg`}
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post.urlToImage}), lightgray 50%`,
                    height: "570px",
                    width: "calc(56%)",
                  }}
                >
                  <div>
                    <span className={`${styles.c1}`}>business</span>
                    <div className={`${styles.info_post}`}>
                      <p className="text-capitalize">
                        {post.author} {getDayAndMonthAndYear(post)}
                      </p>
                      <h1 className="text-capitalize">{post.title}</h1>
                    </div>
                  </div>
                </Link>
                <br />
                <div
                  className={`${styles.parentHeadLineRight} col-lg-5 col-12`}
                >
                  <div className={`${styles.group} d-flex gap-3`}>
                    <GetTowHeadLine />
                  </div>
                  <GetOneHeadLine />
                </div>
              </>
            );
          }
        })}
      </>
    );
  }
};

export default TopHeadlines;
