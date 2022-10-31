// import fs from 'fs';
// import path from 'path';
import type { PropsWithChildren } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
// import matter from 'gray-matter';
import { mdxs } from '@/utils/articlespath';

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
  const articles = mdxs.map((name) => {
    // const source = fs.readFileSync(path.join(ARTICLES_PATH, name));
    // const {} = matter(source);

    const filename = name.replace(/\.mdx?$/, '');

    return {
      filename,
    };
  });

  return { props: { articles } };
};
