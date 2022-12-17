import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js application with fake store api"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="ecommerce, fake-store, next-ecommerce" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
