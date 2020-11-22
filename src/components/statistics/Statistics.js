import React from 'react';
import StatisticsList from './StatisticsList';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}
      <StatisticsList stats={stats} />
    </section>
  );
}

export default Statistics;
