import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

import { FriendListItem } from "./friends-list-item/FriendListItem"

export const FriendsList = ({friends}) => {
  return <ul className={styles.friendList}>
    {friends.map(friend => {
      return <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}/>
    })}
</ul>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
