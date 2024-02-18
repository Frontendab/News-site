"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "../Top headlines/TopHeadlines";
import { apiKey } from "@/API/Apikey";

const GetComponentNewBetween = () => {
  let domain;

  if (typeof window !== "undefined") domain = localStorage.getItem("d");

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

  if (news) {
    return (
      <>
        {news.map((post, i) => {
          if (i > 2 && i < 8) {
            return (
              <Link
                key={post.description}
                href={`/news/${post.author}/${domain}/${filterTitle(
                  post
                )}/${i}`}
                className="content row"
                style={{
                  paddingLeft: "12px",
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
                    {`${post.author ? post.author.slice(0, 10) : ""}...`}{" "}
                    {getDayAndMonthAndYear(post)}
                  </p>
                  <p
                    className="m-0"
                    style={{ fontSize: "16px" }}
                  >{`${post.title.slice(0, 50)}...`}</p>
                </div>
              </Link>
            );
          }
        })}
      </>
    );
  }
};
export default GetComponentNewBetween;
