import styles from './FriendList.module.css'

import { FriendListItem } from "./friends-list-item/FriendListItem"

export const FriendsList = ({friends}) => {
  return <ul className={styles.friendList}>
    {friends.map(friend => {
      return <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
    })}
</ul>
}
