import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "../../components/Calendar";
import { startOfMonth, lastDayOfMonth, sub, format } from "date-fns";
import Template from "../../components/template";

export default function Invoice() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showCalendarStart, setShowCalendarStart] = useState(false);
  const [showCalendarEnd, setShowCalendarEnd] = useState(false);
  const result = sub(Date.now(), { months: 1 });

  const firstDayOfLastMonth = startOfMonth(result);
  const lastDayOfLastMonth = lastDayOfMonth(result);

  const [periodStart, setPeriodStart] = useState(firstDayOfLastMonth);
  const [periodEnd, setPeriodEnd] = useState(lastDayOfLastMonth);
  const ref = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCalendarEnd(false);
      }
      if (startRef.current && !startRef.current.contains(event.target)) {
        setShowCalendarStart(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const toastClassname = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const onChangeEndDate = (e) => {
    if (showCalendarStart) {
      setShowCalendarStart(false);
    }
    setShowCalendarEnd(!showCalendarEnd);
    if (periodStart > periodEnd) {
      toast.warn(
        "End date cannot be earlier than the Start date",
        toastClassname
      );
    } else {
      setErrorMessage("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setShowCalendarEnd(false);
    setShowCalendarStart(false);
    if (!periodEnd || !periodStart) {
      toast.error("Please select a date range", toastClassname);
    } else {
      if (periodStart > periodEnd) {
        toast.error("Please select a valid date range", toastClassname);
      } else {
        setLoader(true);
        const dateRange = {
          from: format(periodStart, "yyyy-MM-dd"),
          to: format(periodEnd, "yyyy-MM-dd"),
        };
        const key = localStorage.getItem("key");
        if (!key) {
          toast.error(
            "Please first enter your pipedream access key on the Settings screen.",
            toastClassname
          );
        } else {
          try {
            await axios.post(`/api/pipedreams/${key}`, dateRange);
            toast.success("Invoice created successfully.", toastClassname);
          } catch (error) {
            toast.error(
              "An error has occurred, please check you are using a valid key",
              toastClassname
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
        <div className="py-6">
          <form
            onSubmit={onSubmit}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          >
            <h1 className="text-2xl font-semibold text-gray-900">
              Monthly Billing
            </h1>
            <h2 className="text-xl flex font-semibold mt-9">
              1. Review all records in
              <a href="https://app.clockify.me/reports/summary" target="_blank">
                <h2 className="ml-2 text-blue underline font-sans text-xl">
                  clockify.me
                </h2>
              </a>
            </h2>
            <h2 className="text-xl flex font-semibold mt-9">
              2. Send invoices to stripe
            </h2>
            <div className="md:flex">
              <div className="flex flex-col mt-10 bg-white max-w-md xs:w-full w-5/12 p-3">
                <label className="text-xl font-semibold">Period Start</label>
                <input
                  className="border w-full h-9 mt-4 rounded border-gray"
                  onClick={() => {
                    if (showCalendarEnd) {
                      setShowCalendarEnd(false);
                    }
                    setShowCalendarStart(!showCalendarStart);
                  }}
                  readOnly
                  value={format(periodStart, "yyyy-MM-dd")}
                />
                <div className="ml-0">
                  {showCalendarStart && (
                    <Calendar
                      innerRef={startRef}
                      selectedDay={periodStart}
                      setSelectedDay={setPeriodStart}
                    />
                  )}
                </div>
              </div>
              <div className="md:ml-2 flex flex-col mt-10 bg-white max-w-md xs:w-full w-9/12 p-3">
                <label className="text-xl font-semibold">Period End</label>
                <input
                  className="border w-full h-9 mt-4 rounded border-gray"
                  onClick={onChangeEndDate}
                  readOnly
                  value={format(periodEnd, "yyyy-MM-dd")}
                />

                <div className="ml-0">
                  {showCalendarEnd && (
                    <Calendar
                      innerRef={ref}
                      selectedDay={periodEnd}
                      setSelectedDay={setPeriodEnd}
                    />
                  )}
                </div>
              </div>
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
                type="submit"
              >
                Create Invoices
              </button>
            </div>
            <h2 className="text-xl flex font-semibold mt-9">
              3. Review invoice records and send via
              <a href="https://dashboard.stripe.com/invoices" target="_blank">
                <h2 className="ml-2 text-blue underline font-sans text-xl">
                  stripe.com
                </h2>
              </a>
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
          </form>
        </div>
      </main>
    </section>
  );
}

Invoice.getLayout = function getLayout(page) {
  return <Template>{page}</Template>;
};
