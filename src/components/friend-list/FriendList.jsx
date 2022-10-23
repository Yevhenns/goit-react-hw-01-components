import { FriendListItem } from "./friends-list-item/FriendListItem"

export const FriendsList = ({friends}) => {
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
