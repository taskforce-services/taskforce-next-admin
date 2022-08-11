import styles from "../styles/Home.module.css";
import Template from "../components/template";

export default function Index() {
  return (
    <section className="md:m-10 xs:m-2 w-10/12">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to{" "}
            <a href="https://taskforce.services">Taskforce Services</a>!
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
        </div>
      </div>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return <Template>{page}</Template>;
};
