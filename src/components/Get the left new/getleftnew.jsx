"use client";
import Link from "next/link";
import styles from "@/components/dont miss/_don't_miss.module.scss";
import { useEffect, useState } from "react";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "../Top headlines/TopHeadlines";
import { apiKey } from "@/API/Apikey";

let domain;
const GetComponentNewLeft = ({}) => {
  if (typeof window !== "undefined") domain = localStorage.getItem("d");

  const getData = async () => {
    let api = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}`;
    let res = await fetch(api);
    let data = await res.json();
    setNews(data.articles);
  };
  const [news, setNews] = useState();

  useEffect(() => {
    getData();
  }, [domain]);

  if (typeof window !== "undefined") localStorage.setItem("d", "cnn.com");

  if (news) {
    return (
      <>
        {news.map((post, i) => {
          if (i === 1) {
            return (
              <Link
                key={i}
                href={`/news/${post.author}/${domain}/${filterTitle(
                  post
                )}/${i}`}
                style={{
                  position: "relative",
                  display: "block",
                  height: "475px",
                }}
              >
                <div
                  className="divBgImg"
                  style={{
                    background: `url(${post.urlToImage})`,
                    position: "absolute",
                    width: "100%",
                    height: "280px",
                  }}
                ></div>
                <div
                  className={styles.info}
                  style={{ position: "absolute", bottom: "15px" }}
                >
                  <p>
                    {post.author} {getDayAndMonthAndYear(post)}
                  </p>
                  <h4>{`${post.title.slice(0, 50)}...`}</h4>
                  <p>{`${post.description.slice(0, 100)}...`}</p>
                </div>
              </Link>
            );
          }
        })}
      </>
    );
  }
};

export default GetComponentNewLeft;
