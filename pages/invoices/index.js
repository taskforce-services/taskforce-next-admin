import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { useState } from "react";

export default function Invoice() {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <section className="md:m-10 xs:m-2 w-10/12">
      <Head>
        <title>Taskforce Monthly Invoicing</title>
        <link rel="icon" href="/taskforce-next-admin/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl font-bold mt-9">Monthly Billing</h1>
        <h2 className="text-xl flex font-semibold mt-9">
          1. Review all records in
          <a href="https://app.clockify.me/reports/summary">
            <h2 className="ml-2 text-blue underline font-sans text-xl">
              clockify.me
            </h2>
          </a>
        </h2>
        <h2 className="text-xl flex font-semibold mt-9">
          2. Send invoices to stripe
        </h2>
        <div className="md:flex">
          <form className="flex flex-col mt-10 bg-white max-w-md xs:w-full w-5/12 p-3">
            <label className="text-xl font-semibold">Period Start</label>
            <input className="border w-full h-9 mt-4" required />
          </form>
          <form className="ml-2 flex flex-col mt-10 bg-white max-w-md xs:w-full w-9/12 p-3">
            <label className="text-xl font-semibold">Period End</label>
            <input className="border w-full h-9 mt-4" required />
          </form>
        </div>
        {loader && <div className={styles.loader} />}
        <button
          className="p-1.5 rounded text-white h-9 bg-indigo mt-4"
          type="submit"
        >
          Create Invoices
        </button>
        {message && (
          <>
            <p className="w-full flex justify-center my-4">{message}</p>
            {keys && (
              <p className="w-full break-all flex justify-center">{keys}</p>
            )}
          </>
        )}
        <h2 className="text-xl flex font-semibold mt-9">
          3. Review all invoices and send
        </h2>
      </main>
    </section>
  );
}

Invoice.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
