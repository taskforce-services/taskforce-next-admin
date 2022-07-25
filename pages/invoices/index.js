import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Taskforce Monthly Invoicing</title>
                <link rel="icon" href="/taskforce-next-admin/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Generate Invoices from Clockify Time Records
                </h1>

                <ul>
                    <li>Need a setting page that allows input of api keys that get stored in browser localstorage</li>
                    <li>This page needs a date range selector (from - to) and defaults to last month</li>
                    <li>When date is selected use the clockify api to print each client, each project, sum of hours for
                        the selected date range, and has a checkbox the user can select (all on by default)
                    </li>
                    <li>User checks off checkboxes next to each client, hits [generte invoices], and code sends a
                        request to pipedream for each client for invoice generation
                    </li>
                </ul>
            </main>
        </div>
    );
}
