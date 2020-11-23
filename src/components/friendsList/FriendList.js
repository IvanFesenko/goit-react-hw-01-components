import React from 'react';

import FriendListItem from './FriendListItem';

function FriendList({ list }) {
  const friendsList = list.map(item => { 
    const { id, isOnline, name, avatar } = item;
    return <FriendListItem
      key={ id }
      status={ isOnline }
      avatar={ avatar }
      name={ name } />
  })
  
  return (
    <ul className="friend-list">{friendsList}</ul>
  )
}

export default FriendList;