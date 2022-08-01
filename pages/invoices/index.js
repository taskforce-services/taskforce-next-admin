import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import { createInvoice } from "../../services/pipedream.service";

export default function Invoice() {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [periodStart, setPeriodStart] = useState(null);
  const [periodEnd, setPeriodEnd] = useState(null);
  let dateRange;

  const onChangeEndDate = (e) => {
    setPeriodEnd(e.target.value);
    if (periodStart > e.target.value) {
      setErrorMessage(
        "Period End date cannot be earlier than the Period Start date"
      );
    } else {
      setErrorMessage("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!periodEnd || !periodStart) {
      setErrorMessage("Please select a date range");
    } else {
      setLoader(true);
      dateRange = { from: periodStart, to: periodEnd };
      const key = localStorage.getItem("key");
      try {
        const invoiceResponse = await axios.post(
          `/api/pipedreams/${key}`,
          dateRange
        );
        console.log(invoiceResponse, "invoiceResponse");
        setMessage(`Invoice created successfully`);
      } catch (error) {
        setMessage(
          "An error has occurred, please check you are using a valid key"
        );
      }
      setLoader(false);
    }
  };

  return (
    <section className="md:m-10 xs:ml-16 xs:m-2 w-10/12">
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
            <input
              type="date"
              className="border w-full h-9 mt-4 rounded border-gray"
              required
              onChange={(e) => setPeriodStart(e.target.value)}
            />
          </form>
          <form className="md:ml-2 flex flex-col mt-10 bg-white max-w-md xs:w-full w-9/12 p-3">
            <label className="text-xl font-semibold">Period End</label>
            <input
              type="date"
              className="border w-full h-9 mt-4 rounded border-gray"
              required
              onChange={(e) => onChangeEndDate(e)}
            />
          </form>
        </div>
        <div className="flex flex-col max-w-4xl">
          {errorMessage && (
            <span className="text-sm text-red">{errorMessage}</span>
          )}
          {loader && (
            <div className="self-center border-8 border-white border-t-skyblue rounded-full border-t-8 w-[3rem] h-[3rem] animate-spin mt-4" />
          )}
          <button
            className="sm:w-[300px] xs:w-[250px] mt-10  md:self-end xs:self-center p-1.5 rounded text-white h-9 bg-indigo mt-4"
            onClick={onSubmit}
          >
            Create Invoices
          </button>
        </div>
        {message && (
          <p className="w-full flex justify-center my-4">{message}</p>
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
