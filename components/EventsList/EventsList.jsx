import ListItem from "../ListItem/ListItem";
import styles from "./EventsList.module.css";
const EventsList = () => {
  const events = [
    {
      name: "Digital African Summit",
      date: "mar., mai 31, 09:00",
      description:
        "Centre International des Conférences CIC Abdelatif Rahal • Aïn Benian, Wilaya dAlger Libre",
      location: "Groupement Algérien des Acteurs du Numérique 20 followers",
      image: "https://picsum.photos/seed/picsum/150/100",
    },
    {
      name: "Event 2",
      date: "mar., mai 31, 09:00",
      description:
        "Centre International des Conférences CIC Abdelatif Rahal • Aïn Benian, Wilaya dAlger Libre",
      location: "Groupement Algérien des Acteurs du Numérique 20 followers",
      image: "https://picsum.photos/seed/picsum/150/100",
    },
    {
      name: "Event 3",
      date: "mar., mai 31, 09:00",
      description:
        "Centre International des Conférences CIC Abdelatif Rahal • Aïn Benian, Wilaya dAlger Libre",
      location: "Groupement Algérien des Acteurs du Numérique 20 followers",
      image: "https://picsum.photos/seed/picsum/150/100",
    },
  ];
  return (
    <div className={styles.eventslist}>
      {events.map((event, index) => (
        <ListItem key={index} data={event} />
      ))}
    </div>
  );
};

export default EventsList;
