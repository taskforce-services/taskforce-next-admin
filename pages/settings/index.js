import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Taskforce Settings</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Settings
                </h1>

                <p>
                    It's not safe to store API keys in this public project. So, this page should have a list of
                    text boxes that allows the user to enter their API keys. When the user hits the "Save" button,
                    add the keys to the browser localstorage. Then, when other pages need API keys, retrieve them.
                </p>
            </main>
        </div>
    );
}
