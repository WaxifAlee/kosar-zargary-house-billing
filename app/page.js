import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center p-12 text-center align-middle">
      <Head lang="en">
        <title>KZH</title>
      </Head>

      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl mb-5 font-sans from-stone-200">
          Please Select a Menu
        </h2>
        <h5 className="text-xs">- KOSAR ZARGARY HOUSE -</h5>

        <div
          className="flex justify-center
                      flex-col rounded"
        >
          <Link
            className="p-3 m-2 rounded bg-blue-400 w-64"
            href={"/pages/sale"}
          >
            Sale Bill
          </Link>

          <Link
            className="p-3 m-2 rounded bg-green-500 w-64"
            href={"/pages/buy"}
          >
            Buy Bill
          </Link>

          <Link className="p-3 m-2 rounded bg-yellow-600 w-64" href={"/"}>
            Gold Rate
          </Link>
        </div>
        <p className="text-xs text-gray-100">Developed By: Wasif Ali</p>
      </div>
    </div>
  );
};

export default Home;
