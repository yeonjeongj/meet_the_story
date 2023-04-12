import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "@/components/card";
import { Type_Keyword } from "@/interfaces/interface";
import { createContext } from "react";

export const CardContext = createContext<Type_Keyword | undefined>(undefined);

export default function Home() {
  const keyword = [
    { id: 0, type: "성장", text: "Better Me" },
    { id: 1, type: "사랑", text: "Love" },
    { id: 2, type: "예술", text: "Artistic" },
    { id: 3, type: "투자", text: "Be Rich" },
    { id: 4, type: "위로", text: "Sensitive" },
    { id: 5, type: "성장", text: "Better Me" },
    { id: 6, type: "사랑", text: "Love" },
    { id: 7, type: "예술", text: "Artistic" },
    { id: 8, type: "투자", text: "Be Rich" },
    { id: 9, type: "위로", text: "Sensitive" },
    { id: 10, type: "성장", text: "Better Me" },
    { id: 11, type: "사랑", text: "Love" },
  ];

  return (
    <>
      <Head>
        <title>Meet The Story</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.main_text}>
          Everybody has a moment <br />
          that a story is needed.
        </h1>
        <div className={styles.input_wrap}>
          <input className={styles.search_input} />
          <IconContext.Provider value={{ size: "30px" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
        <div className={styles.card_container}>
          {keyword.map((data: Type_Keyword) => {
            return (
              <CardContext.Provider key={data.id} value={data}>
                <Card />
              </CardContext.Provider>
            );
          })}
        </div>
      </div>
    </>
  );
}
