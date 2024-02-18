import styles from "./_loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.parentLoader}>
      <span class={styles.loader}></span>
    </div>
  );
};

export default Loading;
