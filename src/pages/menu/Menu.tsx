import { useState } from "react";

import Filters from "./Filters/Filters";
import Items from "./Items/Items";
import styles from "./Menu.module.scss";
import Order, { OptionsOrder } from "./Order/Order";
import Search from "./Search/Search";

import theme from "styles/Theme.module.scss";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState<OptionsOrder>("");

  return (
    <section className={styles.menu}>
      <h3 className={theme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  );
}
