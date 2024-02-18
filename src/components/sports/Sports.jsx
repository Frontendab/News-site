import { categories_sports, followersOnPlatforms } from "@/asset/data/data";
import NewsCategory from "../section news category/NewsCategory";
import styles from "../dont miss/_don't_miss.module.scss";

const Sports = () => {
  return (
    <section className={`${styles.section} p-0`}>
      <div
        className={`${styles.spaceHeight} container`}
        style={{ height: "42px" }}
      ></div>
      <div className="row container pe-0">
        <NewsCategory titleSection="sports" categories={categories_sports} />
        <div className={`px-0 ${styles.stayConnected} col-lg-3 col-12`}>
          <div className={styles.top}>
            <h6 className="m-0">Stay Connected</h6>
            <br />
            <div className="platforms">
              <div className={styles.platform}>
                {followersOnPlatforms.map((v) => (
                  <div
                    className={`${styles.content} col-6 d-flex align-items-center`}
                    style={{ background: `${v.bg}` }}
                  >
                    <h5>{v.icon}</h5>
                    <div className="ms-2 text text-capitalize">
                      <p className="m-0">{v.lengthFollowers}</p>
                      <p className="m-0">{v.nameAction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.down}>
            <div
              className="divBgImg"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D), lightgray 50%`,
              }}
            >
              <h4 className="m-0 text-light">Ad</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
