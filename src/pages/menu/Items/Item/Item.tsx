import TagsDish from "components/tagsDish/TagsDish";
import { Dish } from "types/Dish";

import styles from "./Item.module.scss";

export default function Item(props: Dish) {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsDish category={category} size={size} serving={serving} price={price}}/>
      </div>
    </div>
  );
}
