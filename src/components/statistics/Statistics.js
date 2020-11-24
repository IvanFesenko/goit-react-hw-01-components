import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </section>
  );
}

export default Statistics;
