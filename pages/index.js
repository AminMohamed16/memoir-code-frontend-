import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.filter}>Filter</div>
        <div className={styles.list}>List</div>
        <div className={styles.map}>Map</div>
      </div>
    </div>
  );
}
