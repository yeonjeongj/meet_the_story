import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "@/component/card";

export default function Home() {
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
          <IconContext.Provider value={{ size: "25px" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}
