import { useState } from "react";
import axios from "axios";
import Template from "../../components/template";

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
    <section className="md:m-10 xs:m-2 xs:ml-8 w-10/12">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <form
            onSubmit={onSubmit}
            className="flex flex-col mt-10 bg-white max-w-md xs:w-full w-5/12 p-3"
          >
            <label className="text-3xl font-semibold">
              {" "}
              Pipedream Access Key
            </label>
            <input
              onChange={(e) => setKey(e.target.value)}
              className="border w-full h-9 mt-4"
              required
              value={key}
            />
            {loader && (
              <div className="self-center border-8 border-gray border-t-skyblue rounded-full border-t-8 w-[3rem] h-[3rem] animate-spin mt-4" />
            )}
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
        </div>
      </div>
    </section>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Template>{page}</Template>;
};
