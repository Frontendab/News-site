"use client";
import { apiKey } from "@/API/Apikey";
import { Categories } from "../head categories/Categories";
import { categories_lifestyle } from "@/asset/data/data";
import styles from "@/components/dont miss/_don't_miss.module.scss";
import { useEffect, useState } from "react";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "../Top headlines/TopHeadlines";
import Link from "next/link";
import Accordion from "../Accordion/Accordion";
import { dataAccordion } from "@/asset/data/data";

const LifeStyle = () => {
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
  }, []);

  const [valueEmailForm, setValueEmailForm] = useState(0);

  if (news)
    return (
      <div className={`lifeStyle container p-0 ${styles.section}`}>
        <div className={styles.row}>
          <div className="col-12 col-lg-9" style={{ overflow: "hidden" }}>
            <Categories
              titleSection="life style"
              categories={categories_lifestyle}
            />
            <div className={`${styles.content_header} mt-3`}>
              {news.map((post, i) => {
                if (i <= 1)
                  return (
                    <>
                      <Link
                        href={`/news/${post.author}/${domain}/${filterTitle(
                          post
                        )}/${i}`}
                        key={post.title}
                        className="mt-3"
                      >
                        <div
                          style={{
                            background: `url(${post.urlToImage}) center no-repeat`,
                            backgroundSize: "cover",
                            width: "100%",
                            height: "350px",
                          }}
                        ></div>
                        <div className="info my-3">
                          <p
                            className="m-0"
                            style={{ color: "rgb(204, 204, 204)" }}
                          >
                            <small style={{ color: "black" }}>
                              {post.author ? post.author : ""}
                            </small>{" "}
                            {getDayAndMonthAndYear(post)}
                          </p>
                          <h4 className="my-3">
                            ‘{post.title ? post.title.slice(0, 100) : ""}’
                          </h4>
                          <small className="text-secondary">
                            {post.description
                              ? post.description.slice(0, 150)
                              : ""}
                          </small>
                        </div>
                      </Link>
                    </>
                  );
              })}
            </div>

            <div className={`${styles.content_down}`}>
              <div>
                {news.map((post, i) => {
                  if (i > 5 && i <= 7)
                    return (
                      <Link
                        key={i}
                        href={`/news/${post.author}/${domain}/${filterTitle(
                          post
                        )}/${i}`}
                        className="d-flex mb-3"
                      >
                        <div
                          style={{
                            background: `url(${post.urlToImage}) center no-repeat`,
                            backgroundSize: "cover",
                            width: "35%",
                            height: "100px",
                          }}
                        ></div>
                        <div className="ms-2 info" style={{ width: "110%" }}>
                          <p className="m-0">
                            {post.author ? post.author : ""}{" "}
                            {getDayAndMonthAndYear(post)}
                          </p>
                          <h6>{post.title ? post.title.slice(0, 100) : ""}</h6>
                        </div>
                      </Link>
                    );
                })}
              </div>

              <div>
                {news.map((post, i) => {
                  if (i > 7 && i <= 9)
                    return (
                      <Link
                        key={i}
                        href={`/news/${post.author}/${domain}/${filterTitle(
                          post
                        )}/${i}`}
                        className="d-flex mb-3"
                      >
                        <div
                          style={{
                            background: `url(${post.urlToImage}) center no-repeat`,
                            backgroundSize: "cover",
                            width: "35%",
                            height: "100px",
                          }}
                        ></div>
                        <div className="ms-2 info" style={{ width: "110%" }}>
                          <p className="m-0">
                            {post.author ? post.author : ""}{" "}
                            {getDayAndMonthAndYear(post)}
                          </p>
                          <h6>{post.title ? post.title.slice(0, 100) : ""}</h6>
                        </div>
                      </Link>
                    );
                })}
              </div>
            </div>
          </div>
          <div
            className={`col-lg-3 col-12 px-3 pt-2 ${styles.contentFormAndNotifications}`}
          >
            <form
              style={{ userSelect: "none" }}
              onSubmit={(e) => e.preventDefault()}
              className={`${styles.formEmail} text-center text-capitalize`}
            >
              <p className="m-0">Get Latest Updates</p>
              <input
                type="email"
                placeholder="Your email address"
                onChange={(e) => setValueEmailForm(e.target.value)}
                required
              />
              <button
                type="submit"
                style={{
                  transition: "opacity .3s",
                  opacity: valueEmailForm.length >= 1 ? 1 : 0.8,
                  pointerEvents:
                    valueEmailForm.length >= 1 ? "inherit" : "none",
                }}
              >
                subscribe
              </button>
            </form>
            <div className={styles.categories}>
              <h6 className="text-capitalize m-0">categories</h6>
              <br />

              <Accordion dataAccordion={dataAccordion} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default LifeStyle;
