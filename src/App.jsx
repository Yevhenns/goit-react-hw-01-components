import { Profile } from "./components/profile/Profile";
import { Statistics } from "components/statistics/Statistics";
import { FriendsList } from "components/friend-list/FriendList";
import { TransactionHistory } from "components/transaction-history/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </div>
  );
};
