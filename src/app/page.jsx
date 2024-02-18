import Entertainment from "@/components/Entertainment/Entertainment";
import styles from "./_page.module.scss";
import TopHeadlines from "@/components/Top headlines/TopHeadlines";
import Do_not_miss from "@/components/dont miss/don't_miss";
import Sports from "@/components/sports/Sports";
import LifeStyle from "@/components/life style/LifeStyle";
import SectionVideos from "@/components/videos section/SectionVideos";
import SectionPhotos from "@/components/section photos/photos";

export const metadata = {
  title: "News",
};

export default function Home() {
  return (
    <>
      <main className={`${styles.main} container`}>
        <div
          className="row"
          style={{ position: "relative", paddingInline: "10px" }}
        >
          <TopHeadlines />
        </div>
        <div>
          <Do_not_miss />
          <Entertainment />
          <Sports />
          <br />
          <LifeStyle />
          <SectionVideos />
        </div>
      </main>
      <div className="container-fluid p-0">
        <SectionPhotos />
      </div>
    </>
  );
}
