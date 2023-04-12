import { instance } from "@/api/apiController";
import { Type_Books } from "@/interfaces/interface";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import styles from "../../styles/Detail.module.scss";
import Link from "next/link";

interface Props {
  data: any;
}

export default function Detail({ data }: Props) {
  return (
    <div className={styles.container}>
      {data.map((book: Type_Books) => {
        return (
          <Link key={book.isbn} className={styles.card_wrap} href={book.link}>
            <Image src={book.image} alt={book.title} width={250} height={360} />
            <section>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.pubdate}</p>
              <p>{book.description}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ category: string }>
) {
  const searchVal = context.params?.category;
  const decoded = searchVal && decodeURI(decodeURIComponent(searchVal));

  const res = await instance.get("", {
    params: {
      query: decoded,
      display: 10,
      start: 1,
    },
  });

  return {
    props: {
      data: res.data.items,
    },
  };
}
