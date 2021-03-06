// eslint-disable-next-line no-unused-vars
import { number } from 'prop-types';
import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';


const App = () => (
    <div>
        <h1 style={{textAlign: 'center',}}>Homework-01</h1>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />
        
            <FriendList friends={friends} />
        
            <TransactionHistory items={transactions} />
                   
    </div>
);

export default App;