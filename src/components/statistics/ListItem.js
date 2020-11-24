import styles from './ListItem.module.css';

function ListItem({ label, percentage, color }) {
  return (
    <li className={styles.item} style={{ backgroundColor: `${color}` }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
}

export default ListItem;
