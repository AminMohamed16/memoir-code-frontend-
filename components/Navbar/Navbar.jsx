import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const routes = [
    {
      route: "/",
      content: "Home",
    },
    {
      route: "/about",
      content: "About",
    },
    {
      route: "/contact",
      content: "Contac",
    },
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <li className={styles.link_text}>
          <Link href="/">
            <a>LOGO</a>
          </Link>
        </li>
        <ul className={styles.navbar_routes}>
          {routes.map((route) => (
            <li key={route.name} className={styles.link_text}>
              <Link href={route.route}>
                <a>{route.content}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
