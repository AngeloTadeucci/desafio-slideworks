import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { BookData, useBookFeed } from "../hooks/BookFeed";
import Footer from "../shared/components/footer/Footer";
import Header from "../shared/components/header/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const { booksData, getAllBooks, loadingBooks } = useBookFeed();

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Book Store</title>
                <meta name="description" content="Book Store by Ângelo Tadeucci" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                {loadingBooks ? (
                    <ClipLoader loading={loadingBooks} size={150} />
                ) : (
                    booksData?.map(function (book, index) {
                        return <BookCard key={index} book={book} />;
                    })
                )}
            </main>

            <Footer />
        </div>
    );
};

function BookCard(props: { book: BookData }) {
    const altImage = "Capa do livro " + props.book.title;
    const [ratio, setRatio] = useState(16 / 9); // default to 16:9

    const date = moment(props.book.published);

    return (
        <div className={styles.card}>
            <Image
                className={styles.cardImage}
                src={props.book.image}
                alt={altImage}
                width={250 / ratio}
                height={200 / ratio}
                layout="responsive"
                onLoadingComplete={({ naturalWidth, naturalHeight }) => setRatio(naturalWidth / naturalHeight)}
            />

            <div className={styles.bookInfo}>
                <h2 style={{ gridRow: 2 }}>{props.book.title}</h2>
                <p style={{ gridRow: 3 }}>{props.book.author}</p>
                <p style={{ gridRowStart: 4, gridRowEnd: 5, height: "100px" }}>{props.book.description}</p>
                <div className={styles.cardGenre} style={{ gridRow: 6, gridColumn: 1 }}>
                    {props.book.genre}
                </div>
                <label style={{ gridRow: 6, gridColumn: 2, textAlign: "right" }}>{date.format("D MMM. YY")}</label>
            </div>
        </div>
    );
}
export default Home;
