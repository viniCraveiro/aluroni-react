import styles from "./NavBar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

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
            <a href={route.to}>{route.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
