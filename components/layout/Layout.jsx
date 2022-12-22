import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import NextNProgress from "nextjs-progressbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js application with dummy json API"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="ecommerce, fake-store, next-ecommerce" />
      </Head>

      <Navbar />
      <ScrollToTop
        viewBox="0 0 256 256"
        smooth
        height="20px"
        color="#fff"
        style={{ backgroundColor: "#DA0037" }}
      />
      <NextNProgress color="#DA0037" height={5} />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
