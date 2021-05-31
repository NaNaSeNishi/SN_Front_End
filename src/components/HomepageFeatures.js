import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '数据爬取与处理',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        以日本排放核废水事件为主题的微博用户信息。爬取数据从2021年4月1日至2021年5月30日，共约15万条微博文本
      </>
    ),
  },
  {
    title: '建模分析',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        选择sklearn模块中的KMeans算法进行建模，通过轮廓系数对KMeans算法进行K值调优，选择最优的K值进行模型训练
      </>
    ),
  },
  {
    title: '可视化展示',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        统计分析对聚类结果进行画像分析，从而明确每一类的特征，将结果可视化展现。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
