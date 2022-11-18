import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import PNGLogo from '@/assets/slogo-color.png';

interface IProps {
  meta: {
    author?: string;
    article?: string;
    title?: string;
    version?: string;
    github?: string;
    office?: string;
    officeCN?: string;
  };
}

const Layout = ({
  children,
  meta: { author = '尸佼', article, title, version, github, office, officeCN },
}: PropsWithChildren<IProps>) => {
  const { back } = useRouter();

  return (
    <>
      <Head>
        <title>{title || article}</title>
      </Head>

      <header className="bg-white h-16 px-20 flex items-center justify-between sticky top-0 shadow">
        <div className="flex items-center gap-4">
          <Image src={PNGLogo} object-fit="scale-down" className="w-8 h-8" alt="shijiao" />
          <span className="font-black antialiased text-2xl">ShiJiao</span>
        </div>
      </header>

      <section
        className="fixed left-0 top-28 w-12 h-12 bg-slate-900 text-white flex items-center justify-center cursor-pointer rounded-r-full"
        title="返回"
        onClick={back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </section>

      <section className="w-[1200px] ml-24 my-8 flex flex-col gap-2">
        {article ? (
          <p className="m-0 flex items-center font-bold text-4xl">
            <label className="w-32">标题：</label>
            {article}
          </p>
        ) : null}{' '}
        {title ? (
          <p className="m-0 flex items-center">
            <label className="w-32">项目名称：</label>
            {title}
          </p>
        ) : null}
        {version ? (
          <p className="m-0 flex items-center">
            <label className="w-32">版本：</label>
            {version}
          </p>
        ) : null}
        {github ? (
          <p className="m-0 flex items-center">
            <label className="w-32">GitHub:</label>
            <a className="text-blue-500" href={github} target="_blank" rel="noreferrer">
              {github}
            </a>
          </p>
        ) : null}
        {office ? (
          <p className="m-0 flex items-center">
            <label className="w-32">官网:</label>
            <a className="text-blue-500" href={office} target="_blank" rel="noreferrer">
              {office}
            </a>
          </p>
        ) : null}
        {officeCN ? (
          <p className="m-0 flex items-center">
            <label className="w-32">中文官网:</label>
            <a className="text-blue-500" href={officeCN} target="_blank" rel="noreferrer">
              {officeCN}
            </a>
          </p>
        ) : null}
        <p className="m-0 flex items-center">
          <label className="w-32">本文作者：</label>
          {author}
        </p>
      </section>

      <article className="w-[1200px] ml-24 my-4">{children}</article>
    </>
  );
};

export default Layout;
