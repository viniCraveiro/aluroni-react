import classNames from "classnames";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import options from "./options.json";
import styles from "./Order.module.scss";

interface Props {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const nameOrder =
    order && options.find((option) => option.value === order)?.nome;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles["order--active"]]: order !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrder || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.order__option}
            key={option.value}
            onClick={() => setOrder(option.value as string)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
