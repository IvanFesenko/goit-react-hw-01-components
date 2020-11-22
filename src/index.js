import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import userProfile from './data/user.json';
import statisticalData from './data/statistical-data.json';

const props = { userProfile, statisticalData };

ReactDOM.render(<App props={props} />, document.getElementById('root'));
