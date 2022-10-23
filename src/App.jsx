import { Profile } from "./components/profile/Profile";
import { Statistics } from "components/statistics/Statistics";
import { FriendsList } from "components/friend-list/FriendList";
import { TransactionHistory } from "components/transaction-history/TransactionHistory";

import user from './data/user.json';
import data from './data/data.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList />
      <TransactionHistory />
    </div>
  );
};
