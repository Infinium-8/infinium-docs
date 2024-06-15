import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/docs/learn/what-is-infinium">Learn</a>,
    Svg: require('@site/static/img/undraw_education.svg').default,    
  },
  {
    title: <a href="/docs/use/overview">Use</a>,
    Svg: require('@site/static/img/undraw_use.svg').default,
  },
  {
    title: <a href="/docs/build/overview">Build</a>,
    Svg: require('@site/static/img/undraw_build.svg').default,
  },
  {
    title: <a href="/docs/mine/overview">Mine</a>,
    Svg: require('@site/static/img/undraw_mining.svg').default,
  },
  {
    title: <a href="/docs/stake/proof-of-stake-mining">Stake</a>,
    Svg: require('@site/static/img/undraw_stake.svg').default,
  },
  {
    title: <a href="/docs/exchange/overview">Exchange</a>,
    Svg: require('@site/static/img/undraw_investing.svg').default,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
