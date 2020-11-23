import React from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendsList/FriendList';
import TransactionHistory from './components/transactions/TransactionHistory';

import './App.css';

function App({ props }) {
  const { userProfile, statisticalData, friendsList, transactions } = props;
  return (
    <div className="container">
      <h1 className="main-title">Homework 1</h1>
      <Profile
        name={userProfile.name}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList list={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
