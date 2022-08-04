import Head from "next/head";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Invoice() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const today = moment().format("YYYY-MM-DD");
  const lastDayOfLastMonth = moment(today)
    .subtract(1, "months")
    .endOf("month")
    .format("YYYY-MM-DD");
  const firstDayOfLastMonth = moment(today)
    .subtract(1, "months")
    .startOf("month")
    .format("YYYY-MM-DD");
  const [periodStart, setPeriodStart] = useState(firstDayOfLastMonth);
  const [periodEnd, setPeriodEnd] = useState(lastDayOfLastMonth);
  let dateRange;

  const onChangeEndDate = (e) => {
    setPeriodEnd(e.target.value);
    if (periodStart > e.target.value) {
      toast.warn("End date cannot be earlier than the Start date", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setErrorMessage("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!periodEnd || !periodStart) {
      toast.error("Please select a date range", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (periodStart > periodEnd) {
        toast.error("Please select a valid date range", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setLoader(true);
        dateRange = { from: periodStart, to: periodEnd };
        const key = localStorage.getItem("key");
        if (!key) {
          toast.error(
            "Please first enter your pipedream access key on the Settings screen.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        } else {
          try {
            await axios.post(`/api/pipedreams/${key}`, dateRange);
            toast.success("Invoice created successfully.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } catch (error) {
            toast.error(
              "An error has occurred, please check you are using a valid key",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        }
      }
      setLoader(false);
    }
  };

  return (
    <section className="md:m-10 xs:ml-8 xs:m-2 w-10/12">
      <Head>
        <title>Taskforce Monthly Invoicing</title>
        <link rel="icon" href="/taskforce-next-admin/favicon.ico" />
      </Head>

      <main>
        <h1 className="xs:text-4xl sm:text-5xl font-bold mt-9">
          Monthly Billing
        </h1>
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
              value={periodStart}
              onChange={(e) => setPeriodStart(e.target.value)}
            />
          </form>
          <form className="md:ml-2 flex flex-col mt-10 bg-white max-w-md xs:w-full w-9/12 p-3">
            <label className="text-xl font-semibold">Period End</label>
            <input
              type="date"
              className="border w-full h-9 mt-4 rounded border-gray"
              required
              value={periodEnd}
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
        <h2 className="text-xl flex font-semibold mt-9">
          3. Review all invoices and send
        </h2>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
