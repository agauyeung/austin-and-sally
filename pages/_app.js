import "/styles/App.css";
import "/styles/index.css";
import Head from "next/head";
import Header from "../src/Components/Header";
import React from "react";

export default function App({ Component, pageProps}) {
  return (
    <>
    <Head>
        <title>Austin & Sally</title>
    </Head>
    <div className="App">
      <Header id="page-header"></Header>
      <Component {...pageProps} />
    </div>
    </>
  );
}
