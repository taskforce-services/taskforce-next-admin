import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Taskforce Services</title>
      </Head>
      <main className="flex bg-gray-light md:h-[100vh] xs:min-h-[100vh]">
        {children}
      </main>
    </>
  );
}
