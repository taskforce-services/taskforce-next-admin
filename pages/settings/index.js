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
    <section className="m-10 w-10/12">
      <h1 className={styles.title}>Settings</h1>
      <p>
        It's not safe to store API keys in this public project. So, this page
        should have a list of text boxes that allows the user to enter their API
        keys. When the user hits the "Save" button, add the keys to the browser
        localstorage. Then, when other pages need API keys, retrieve them.
      </p>
      <form onSubmit={onSubmit} className={styles.keyForm}>
        <label> Pipedream Secret Key</label>
        <input
          onChange={(e) => setKey(e.target.value)}
          className="border w-5/12 h-9 mt-4"
          required
          value={key}
        />
        {loader && <div className={styles.loader} />}
        <button className={styles.submit} type="submit">
          Save
        </button>
      </form>
      {message && (
        <>
          <p className={styles.keys}>{message}</p>
          {keys && <p className={styles.keys}>{keys}</p>}
        </>
      )}
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
