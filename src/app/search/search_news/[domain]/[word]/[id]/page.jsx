import { apiKey } from "@/API/Apikey";
import styles from "@/app/news/[author]/[domain]/[title]/[id]/_single.module.scss";
import { dataFiltering } from "@/app/search/[on]/page";
import { months } from "@/components/navbar/navbar";

export const metadata = {
  title: "search",
};

const Search_news = async ({ params }) => {
  let domain = params.domain;
  let word = params.word;
  let id = params.id;

  let api = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}`;
  let res = await fetch(api, { cache: "no-store" });
  let data = await res.json();

  let post = dataFiltering(data.articles, word)[id];

  const getDayAndMonthAndYear = (post) => {
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
  return (
    <div
      key={post.title}
      className={`container p-0 ${styles.containerSinglePageNews}`}
    >
      <div className="row">
        <div
          className={`${styles.contentPageSingleNews} divBgImg`}
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post.urlToImage}), lightgray 50%`,
            height: "570px",
            width: "calc(100% - 43%)",
            marginLeft: "12px",
          }}
        ></div>
        <div className="col-lg-5 col-12">
          <div
            className={styles.parentContentText}
            style={{ margin: "0 28px" }}
          >
            <h1 className={styles.title}>{post.title}</h1>
            <h5>
              {post.author} {getDayAndMonthAndYear(post)}
            </h5>
            <p style={{ marginTop: "14px" }}>{post.description}</p>
          </div>
        </div>
      </div>
      <div className="content my-4">
        <p className="m-0">{post.content}</p>
      </div>
    </div>
  );
};

export default Search_news;
