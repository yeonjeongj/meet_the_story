import Link from "next/link";
import { useContext } from "react";
import { CardContext } from "@/pages";
import styles from "../styles/Home.module.scss";

const Card = () => {
  const cardData = useContext(CardContext);
  const encoded = cardData && encodeURI(encodeURIComponent(cardData.type));

  return (
    <Link className={styles.card_wrap} href={`/detail/${encoded}`}>
      <p className={styles.card_content}>{cardData?.text}</p>
    </Link>
  );
};

export default Card;
