import Template from "../components/template";
import Head from "next/head";
export default function Index() {
  return (
    <section className="md:m-10 xs:m-2 w-10/12">
      <Head>
        <title>Taskforce</title>
        <link rel="icon" href="/taskforce-next-admin/favicon.ico" />
      </Head>

      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome to{" "}
              <a href="https://taskforce.services">Taskforce Services</a>!
            </h1>

            <p className="justify-center text-lg font-medium mt-5 text-center">
              Professional Services for Saas Enterprises and Their Customers
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="settings"
                className="flex-col relative rounded-lg border border-gray-300 bg-white px-px py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <h2 className="mb-2 text-base font-medium">Settings &rarr;</h2>
                <p>Enter your API keys before using services here</p>
              </a>
              <a
                href="invoices"
                className="flex-col relative rounded-lg border border-gray-300 bg-white px-px py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <h2 className="mb-2 text-base font-medium">
                  Review Clockify &rarr;
                </h2>
                <p>Review monthly hours and create invoices.</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return <Template>{page}</Template>;
};
