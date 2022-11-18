// import fs from 'fs';
// import path from 'path';
import type { PropsWithChildren } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
// import matter from 'gray-matter';
import { ARTICLES_PATH, dirs, mdxs } from '@/utils/articlespath';

import IndexPage, { IProps } from '@/features/index';

export default function Index(props: PropsWithChildren<IProps>) {
  return (
    <>
      <Head>
        <title>{"ShiJiao's Site"}</title>
        <meta name="description" content="null" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexPage {...props} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IProps> = () => {
  const data = dirs.map((name) => {
    // const source = fs.readFileSync(path.join(ARTICLES_PATH, name));
    // const {} = matter(source);

    const articles = mdxs(`${ARTICLES_PATH}/${name}`).map((_) => _.replace(/\.mdx?$/, ''));

    return { belong: name, articles };
  });

  return { props: { data } };
};
