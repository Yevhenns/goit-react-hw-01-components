import { FriendListItem } from "./friends-list-item/FriendListItem"
import friends from '../../data/friends.json'


export const FriendsList = () => {
  return <ul class="friend-list">
    {friends.map((friend, index) => {
      return <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}/>
    })}
</ul>
}
