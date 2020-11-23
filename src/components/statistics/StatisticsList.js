import React from 'react';
import ListItem from './ListItem';
import colors from '../../services/colors';
import random from '../../services/randomNumber';

function StatisticsList({ stats }) {
  const listItems = stats.map(item => {
    const number = random(0, 43);
    return (
      <ListItem
        key={item.id}
        label={item.label}
        percentage={`${item.percentage}%`}
        color={colors[number]}
      />
    );
  });

  return <ul className="stat-list">{listItems}</ul>;
}

export default StatisticsList;
