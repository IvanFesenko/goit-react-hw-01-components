import React from 'react';

function ListItem({ label, percentage, color }) {
  return (
    <li className="item" style={{ backgroundColor: `${color}` }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

export default ListItem;
