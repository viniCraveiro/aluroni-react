import styles from "./NavBar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const routes = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/menu",
    },
    {
      label: "Sobre",
      to: "/about",
    },
  ];
  return (
    <nav className={styles.card}>
      <Logo />
      <ul className={styles.card__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.card__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
