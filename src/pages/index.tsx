import React from "react";
// import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
// import styles from "./styles.module.css";

// const features = [
//   {
//     title: "Nodejs",
//     imageUrl: "img/undraw_docusaurus_tree.svg",
//     description: (
//       <>
//         Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js
//         使用了一个事件驱动、非阻塞式 I/O 的模型。
//       </>
//     ),
//   },
//   {
//     title: "React.js",
//     imageUrl: "img/undraw_docusaurus_react.svg",
//     description: (
//       <>
//         React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC
//         框架，都不满意，就决定自己写一套，用来架设Instagram
//         的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。
//       </>
//     ),
//   },
//   {
//     title: "kubernetes",
//     imageUrl: "img/undraw_docusaurus_mountain.svg",
//     description: (
//       <>
//         是一个开源的，用于管理云平台中多个主机上的容器化的应用，Kubernetes的目标是让部署容器化的应用简单并且高效（powerful）,Kubernetes提供了应用部署，规划，更新，维护的一种机制。
//       </>
//     ),
//   },
// ];

// function Feature({ imageUrl, title, description }) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx("col col--4", styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

export default () => {
  // const context = useDocusaurusContext();
  // const { siteConfig = {} } = context;
  return (
    <Layout title="首页" description="">
      {/*<header className={clsx("hero hero--primary", styles.heroBanner)}>*/}
      {/*  <div className="container">*/}
      {/*    <h1 className="hero__title">{siteConfig.title}</h1>*/}
      {/*    <p className="hero__subtitle">{siteConfig.tagline}</p>*/}
      {/*    <div className={styles.buttons}>*/}
      {/*      <Link*/}
      {/*        className={clsx(*/}
      {/*          "button button--outline button--secondary button--lg",*/}
      {/*          styles.getStarted*/}
      {/*        )}*/}
      {/*        to={useBaseUrl("docs/")}*/}
      {/*      >*/}
      {/*        Entry*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
      {/*<main>*/}
      {/*  {features && features.length > 0 && (*/}
      {/*    <section className={styles.features}>*/}
      {/*      <div className="container">*/}
      {/*        <div className="row">*/}
      {/*          {features.map((props, idx) => (*/}
      {/*            <Feature key={idx} {...props} />*/}
      {/*          ))}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*  )}*/}
      {/*</main>*/}
    </Layout>
  );
};
