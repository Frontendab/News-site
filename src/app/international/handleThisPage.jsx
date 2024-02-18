"use client";
import Link from "next/link";
import {
  filterTitle,
  getDayAndMonthAndYear,
} from "@/components/Top headlines/TopHeadlines";
import styles from "./_style.module.scss";

const HandleThisPage = ({ post, i, domain }) => {
  return (
    <Link
      key={i}
      href={`/news/show_post/${domain}/${filterTitle(post)}/${i}`}
      style={{
        position: "relative",
        display: "block",
        height: "475px",
      }}
      className="rounded shadow mb-3"
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
      <div className={`${styles.info} px-2`} style={{ position: "absolute" }}>
        <p>
          {`${post.author ? post.author.slice(0, 22) : ""}`}{" "}
          {getDayAndMonthAndYear(post)}
        </p>
        <h4>{`${post.title ? post.title.slice(0, 50) : ""}...`}</h4>
        <p>{`${
          post.description ? post.description.slice(0, 90) : ""
        }...${i}`}</p>
      </div>
    </Link>
  );
};

export default HandleThisPage;
