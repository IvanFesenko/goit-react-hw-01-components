import ListItem from './ListItem';
import randomColor from '../../services/randomHexColor';
import styles from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={styles.stat_list}>
      {stats.map(item => {
        return (
          <ListItem
            key={item.id}
            label={item.label}
            percentage={`${item.percentage}%`}
            color={randomColor()}
          />
        );
      })}
    </ul>
  );
}

export default StatisticsList;
