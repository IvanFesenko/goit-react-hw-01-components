import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

function TransactionsItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={styles.capitalLetter}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsItem;
