/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Porfolio Front-End Developer" />
        <link rel="icon" href='/public/images/icon.png' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
