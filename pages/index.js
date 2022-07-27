import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Index() {
  return (
    <section className="md:m-10 xs:m-2 w-10/12">
      <h1 className={styles.title}>
        Welcome to <a href="https://taskforce.services">Taskforce Services</a>!
      </h1>

      <p className={styles.description}>
        Professional Services for Saas Enterprises and Their Customers
      </p>

      <div className={styles.grid}>
        <a href="settings" className={styles.card}>
          <h2>Settings &rarr;</h2>
          <p>Enter your API keys before using services here</p>
        </a>

        <a href="invoices" className={styles.card}>
          <h2>Review Clockify &rarr;</h2>
          <p>Review monthly hours and create invoices.</p>
        </a>
      </div>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
