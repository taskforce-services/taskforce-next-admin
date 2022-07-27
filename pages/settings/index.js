import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

export default function Settings() {
  const [key, setKey] = useState();
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [keys, setKeys] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    localStorage.setItem("key", key);
    try {
      const response = await axios.get(`/api/pipedreams/${key}`);
      setKeys(JSON.stringify(response.data));
      setMessage(`Keys retrieved succesfully`);
    } catch (error) {
      setKeys();
      setMessage(
        "An error has occurred, please check you are using a valid key"
      );
    }
    setKey("");
    setLoader(false);
  };

  return (
    <section className="md:m-10 xs:m-2 w-10/12">
      <h1 className="text-5xl font-bold mt-9">Settings</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col mt-10 bg-white max-w-md xs:w-full w-5/12 p-3"
      >
        <label className="text-3xl font-semibold"> Pipedream Access Key</label>
        <input
          onChange={(e) => setKey(e.target.value)}
          className="border w-full h-9 mt-4"
          required
          value={key}
        />
        {loader && <div className={styles.loader} />}
        <button
          className="w-full text-white h-9 bg-forest-green mt-4"
          type="submit"
        >
          Save
        </button>
        {message && (
          <>
            <p className="w-full flex justify-center my-4">{message}</p>
            {keys && (
              <p className="w-full break-all flex justify-center">{keys}</p>
            )}
          </>
        )}
      </form>
    </section>
  );
}

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
