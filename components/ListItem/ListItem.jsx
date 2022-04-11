import Image from "next/image";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const { name, description, date, location, image } = props.data;
  return (
    <div className={styles.listItem}>
      <div className={styles.listItem_description}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <div className={styles.listItem_image}>
        <Image alt="Image" src={image} width={150} height={100} />
      </div>
    </div>
  );
};

export default ListItem;
