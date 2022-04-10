import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>navbar</div>
      <div className={styles.container}>
        <div className={styles.filter}>Filter</div>
        <div className={styles.list}>List</div>
        <div className={styles.map}>Map</div>
      </div>
    </div>
  );
}
