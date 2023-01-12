import options from "./options.json";
import styles from "./Order.module.scss";

export default function Order() {
  return (
    <button className={styles.order}>
      <span>Ordenar Por</span>
      <div className={styles.order__options}>
        {options.map((option) => (
          <div className={styles.order__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
