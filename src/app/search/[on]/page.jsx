import { apiKey } from "@/API/Apikey";
import styles from "../../international/_style.module.scss";
import BodyNewsSearch from "@/components/body news from search/body";

export const metadata = {
  title: "search",
};

export let dataFiltering = (data, handleSearchParam) => {
  return data.filter((v) =>
    v.title.toLocaleLowerCase().includes(handleSearchParam)
  );
};

const SearchPage = async ({ params }) => {
  let paramSearch = Array.from(params.on);
  let indexEqual = paramSearch.indexOf("D") + 1;
  let handleSearchParam = paramSearch
    .slice(indexEqual)
    .join("")
    .toLocaleLowerCase();

  let domain = "time.com";

  let api = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}`;
  let res = await fetch(api, { cache: "no-store" });
  let json = await res.json();

  let data = json.articles;

  let resultFiltering = dataFiltering(data, handleSearchParam);

  console.log(resultFiltering.length);

  if (resultFiltering.length > 0) {
    return (
      <>
        <div className={`${styles.grid} container p-0 mb-2`}>
          {resultFiltering.map((post, i) => {
            if (i <= 5)
              return (
                <BodyNewsSearch
                  post={post}
                  i={i}
                  domain={domain}
                  word={handleSearchParam}
                />
              );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div
        className="container"
        style={{
          height: "55vh",
          textAlign: "center",
          paddingTop: "70px",
          color: "#a2a2a2",
        }}
      >
        <h1 style={{ fontSize: "55px" }}>Not found</h1>
      </div>
    );
  }
};

export default SearchPage;
