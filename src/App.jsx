import { Profile } from "./components/profile/Profile";
import { Statistics } from "components/statistics/Statistics";
import { FriendsList } from "components/friend-list/FriendList";
import { TransactionHistory } from "components/transaction-history/TransactionHistory";

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics
        title="Upload stats"
        stats={data} />      
      <FriendsList
      friends={friends}/>
      <TransactionHistory
      items={transactions}/>
    </div>
  );
};
