import React from 'react';

import TransactionsItem from './TransactionItem';

function TransactionHistory({ items }) {
  const transactions = items.map(item => {
    const { id, type, amount, currency } = item;
    return (
      <TransactionsItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    );
  });

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
}

export default TransactionHistory;
