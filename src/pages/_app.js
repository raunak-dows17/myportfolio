import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../style.css";
import "../App.css";
import "../sections.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pre from "../components/Pre";
import ScrollToTop from "../components/ScrollToTop";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Pre load={load} /> */}
      <main className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
