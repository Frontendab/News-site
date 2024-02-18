import styles from "./magazine.module.scss";

const Magazine = ({ width, height }) => {
  return (
    <div
      className={`${styles.magazine} text-light d-flex align-items-center justify-content-between`}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="text">
        <p>
          Best Selling <b>BLOG</b> and <b>MAGAZINE</b> <br />
          Theme of All Time
        </p>
        <p className="m-0">Experience the change!</p>
      </div>
      <div className={styles.btn}>
        <button className="text-uppercase text-light p-2 border-0">
          purchase now
        </button>
      </div>
    </div>
  );
};

export default Magazine;
