import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import EventsList from "../components/EventsList/EventsList";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.filter}>Filter</div>
        <div className={styles.list}>
          <EventsList />
        </div>
        <div className={styles.map}>Map</div>
      </div>
    </div>
  );
}
