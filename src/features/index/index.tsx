import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PNGLogo from '@/assets/slogo-color.png';
import styles from './index.module.css';

export interface IProps {
  articles: {
    filename: string;
  }[];
}

const IndexPage = ({ articles }: PropsWithChildren<IProps>) => {
  return (
    <>
      <header className="h-24 px-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={PNGLogo} object-fit="scale-down" className="w-8 h-8" alt="shijiao" />
          <span className="font-black antialiased text-2xl font-sans">ShiJiao</span>
        </div>

        <div>
          <a href="https://github.com/DrReMain" target="_blank" rel="noreferrer">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </header>

      <section
        className={`relative mx-20 rounded-2xl bg-sky-400 h-40 flex flex-col gap-2 items-center justify-center ${styles.bg}`}>
        <span className="text-4xl text-white">👨‍💻 尸佼</span>
        <span>🤪 低级前端开发工程师</span>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-1/2 flex items-center gap-4 bg-white p-4 shadow-lg rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input disabled className="bg-white flex-1 h-full" placeholder="搜索暂不可用" type="text" />
        </div>
      </section>

      <section className="mx-20 mt-20 flex items-center justify-center gap-16 text-gray-600">
        <button className="bg-teal-400 text-white rounded-full px-4 py-2">源码阅读系列</button>
        <button>FE</button>
        <button>Golang</button>
        <button>Rust</button>
        <button>Python</button>
        <button>CloudNative</button>
        <button>BlockChain</button>
      </section>

      <main className="mx-20 mt-10 box-border grid grid-cols-5 gap-4">
        {articles.map(({ filename }) => (
          <Link
            href={`articles/${filename}`}
            key={filename}
            className="h-20 w-full flex items-center justify-center rounded-xl bg-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200 no-underline ">
            <span className="font-bold text-2xl text-black">{filename}</span>
          </Link>
        ))}
      </main>
    </>
  );
};

export default IndexPage;
