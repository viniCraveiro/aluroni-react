import NotFound from "components/notFound/NotFound";
import PageDefault from "components/pageDefault/PageDefault";
import TagsDish from "components/tagsDish/TagsDish";
import menu from "data/menu.json";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import styles from "./Dish.module.scss";

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dish = menu.find((item) => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PageDefault />}>
        <Route
          index
          element={
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
                  <p className={styles.content__description}>
                    {dish.description}
                  </p>
                  <TagsDish {...dish} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
