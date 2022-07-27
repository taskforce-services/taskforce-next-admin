import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Taskforce Services</title>
      </Head>
      <main className="flex bg-gray-light">{children}</main>
    </>
  );
}
