import { categories_lifestyle, playing } from "@/asset/data/data";
import { Categories } from "../head categories/Categories";
import Magazine from "../navbar/magazine/magazine";
import styles from "./videos.module.scss";
import stylesDoNotMiss from "@/components/dont miss/_don't_miss.module.scss";
import Image from "next/image";
import Link from "next/link";

const SectionVideos = () => {
  return (
    <>
      <div className="">
        <div className="container p-0">
          <div className="col-lg-9 col-12">
            <Magazine width="100%" height="120px" />
          </div>

          <div
            className={`videos container p-0 mt-3 ${stylesDoNotMiss.section}`}
          >
            <div className={stylesDoNotMiss.row}>
              <div className="col-12 col-lg-9" style={{ overflow: "hidden" }}>
                <Categories
                  titleSection="gaming"
                  categories={categories_lifestyle}
                />
                <div className={`${styles.content} mt-4`}>
                  <Link
                    href="https://now.gg/apps/epic-games/7308/fortnite.html"
                    target="_blank"
                  >
                    <figure>
                      <div className={styles.overly}></div>
                      <p>Play</p>
                      <Image
                        style={{ position: "relative" }}
                        src="https://cdn2.unrealengine.com/blade-2560x1440-2560x1440-d4e556fb8166.jpg"
                        width={1000}
                        height={500}
                        alt="fortnite"
                      />
                      <figcaption>
                        <h6 className="text-capitalize">
                          craig Batar - 27 Dec 2020
                        </h6>
                        <h1>
                          Play This Game for Free on Epic Store This Weekend
                        </h1>
                      </figcaption>
                    </figure>
                  </Link>
                  <div className={styles.row}>
                    {playing.map((v) => (
                      <Link
                        href={v.link}
                        target="_blank"
                        className="content"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="divBgImg"
                          style={{
                            background: `url(${v.img}) center no-repeat`,
                            width: "100%",
                            height: "200px",
                          }}
                        ></div>
                        <h6 className={styles.exports}>{v.category}</h6>
                        <div className="text mt-1">
                          <small className="m-0 text-capitalize">
                            {v.author}
                          </small>
                          <p>
                            Play {v.name_game} for Free on Epic Store This
                            Weekend
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionVideos;
