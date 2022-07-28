import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  return (
    <>
      {!sidebarOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden xs:flex h-9 w-9 absolute mt-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <div
        className={
          (sidebarOpen &&
            "md:h-[100vh] md:w-3/12 sm:w-3/12 md:flex md:flex-col sm:h-auto bg-indigo xs:absolute md:relative sm:h-[100vh]") ||
          "hidden"
        }
      >
        <div className=" md:hidden xs:flex w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden xs:flex h-9 w-9 absolute mt-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </div>
        <main className="flex flex-row h-full">
          <div
            key="navBar"
            className="flex justify-between flex-col h-full w-11/12"
          >
            <div>
              <p className="font-sans flex justify-center text-white text-2xl font-bold m-6 mt-9">
                workflow
              </p>

              <nav>
                <div
                  className={
                    (router.pathname === "/" &&
                      "my-4 mx-2 pl-1 rounded w-full bg-violet") ||
                    "my-4 mx-2 pl-1 rounded w-full hover:bg-violet"
                  }
                >
                  <a className="flex flex-row my-2 items-center" href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#c0c0c0"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <h2 className="ml-2 text-white font-sans text-xl">
                      Dashboard
                    </h2>
                  </a>
                </div>
                <div
                  className={
                    (router.pathname === "/invoices" &&
                      "my-4 mx-2 pl-1 rounded w-full bg-violet") ||
                    "my-4 mx-2 pl-1 rounded w-full hover:bg-violet"
                  }
                >
                  <a
                    className="flex flex-row mb-2 items-center"
                    href="invoices"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#c0c0c0"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <h2 className="ml-2 text-white font-sans text-xl">
                      Monthly Billing
                    </h2>
                  </a>
                </div>
              </nav>
            </div>

            <div
              className={
                (router.pathname === "/settings" &&
                  "my-4 mx-2 flex align-end pl-1 rounded w-full bg-violet") ||
                "my-4 mx-2 flex align-end pl-1 rounded w-full hover:bg-violet"
              }
            >
              <a href="settings">
                <div className="flex flex-row my-2">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="#c0c0c0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <h2 className="ml-2 text-white font-sans text-xl">
                    Settings
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
