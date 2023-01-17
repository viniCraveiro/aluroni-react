import classNames from "classnames";
import menu from "data/menu.json";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./Dish.module.scss";

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dish = menu.find((item) => item.id === Number(id));
  if (!dish) {
    return null;
  }

  return (
    <>
      <button className={styles.return} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${dish.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {dish.category.label}
            </div>
            <div className={styles.tags__porcao}>{dish.size}g</div>
            <div className={styles.tags__qtdpessoas}>
              Serve {dish.serving} pessoa{dish.serving === 1 ? "" : "s"}
            </div>
            <div className={styles.tags__valor}>R$ {dish.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
