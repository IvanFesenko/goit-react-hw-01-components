import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import userProfile from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendsList from './data/friends.json';
import transactions from './data/transactions.json';

const props = { userProfile, statisticalData, friendsList, transactions };

ReactDOM.render(<App props={props} />, document.getElementById('root'));
