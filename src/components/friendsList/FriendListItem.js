import React from 'react';
import PropTypes from 'prop-types';

function FriendListItem({status, avatar, name}) {
  const onlineStatus = status ? 'status is-online' : 'status is-offline';
  return (
    <li className="item">
      <span className={onlineStatus}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
}

FriendListItem.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};


export default FriendListItem;