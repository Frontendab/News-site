import HandleThisPage from "../international/handleThisPage";
import styles from "../international/_style.module.scss";
import { apiKey } from "@/API/Apikey";

export const metadata = {
  title: "sports",
};

const sports = async () => {
  let domain = "skysports.com";

  let api = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}`;
  let res = await fetch(api, { cache: "no-store" });
  let json = await res.json();

  let data = json.articles;

  if (data) {
    return (
      <>
        <div className={`${styles.grid} container p-0 mb-2`}>
          {data.map((post, i) => {
            if (i <= 5)
              return <HandleThisPage post={post} i={i} domain={domain} />;
          })}
        </div>
      </>
    );
  }
};

export default sports;
