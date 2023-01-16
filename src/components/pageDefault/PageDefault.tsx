import styles from "./PageDefault.module.scss";
import { Outlet } from "react-router-dom";
import theme from "styles/Theme.module.scss";

export default function pageDefault() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={theme.container}>
        <Outlet />
      </div>
    </>
  );
}
