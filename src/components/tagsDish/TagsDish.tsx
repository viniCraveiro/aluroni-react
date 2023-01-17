import classNames from "classnames";
import { Dish } from "types/Dish";
import styles from "./TagsDish.module.scss";

export default function TagsDish({ category, size, serving, price }: Dish) {
  return (
    <div className={styles.item__tags}>
      <div
        className={classNames({
          [styles.item__type]: true,
          [styles[`item__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.item__portion}>{size}</div>
      <div className={styles.item__qtdperson}>
        Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
