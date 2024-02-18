import { categories_do_not_miss } from "@/asset/data/data";
import styles from "./_don't_miss.module.scss";
import Last from "../last news section dont miss/last";
import NewsCategory from "../section news category/NewsCategory";

const Do_not_miss = () => {
  return (
    <section className={`${styles.section} p-0`}>
      <div
        className={`${styles.spaceHeight} container`}
        style={{ height: "42px" }}
      ></div>
      <div className="row container">
        <NewsCategory
          titleSection="don't miss"
          categories={categories_do_not_miss}
        />

        <div className={`${styles.second} col-lg-3 col-12`}>
          <div className="ps-4 ">
            <br />
            <Last />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Do_not_miss;
