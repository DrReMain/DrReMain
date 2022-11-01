import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { MDXProvider } from '@mdx-js/react';
import { PropsWithChildren } from 'react';

const components = {
  h1: (props: PropsWithChildren) => <h1 {...props} />,
  code: (props: PropsWithChildren) => <code className="bg-gray-200 py-1 px-2 mx-1 rounded" {...props} />,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
      <Analytics />
    </>
  );
}
