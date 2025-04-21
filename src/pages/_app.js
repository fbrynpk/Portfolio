import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ryan's Portfolio</title>
        <meta name="description" content="Clinical Data Scientist & AI Researcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
