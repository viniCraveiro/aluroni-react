import styles from "./Dish.module.scss";
import { useLocation, useParams } from "react-router-dom";

export default function Dish() {
  console.log(useLocation());
  return <div>Prato</div>;
}
