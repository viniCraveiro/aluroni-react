import menu from "data/menu.json";

import styles from "./Home.module.scss";

export default function Home() {
  let dishesRecommend = [...menu];
  dishesRecommend = dishesRecommend
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommends}>
        {dishesRecommend.map((item) => (
          <div key={item.id} className={styles.recommend}>
            <div className={styles.recommend__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommend__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
