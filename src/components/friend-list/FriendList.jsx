import { FriendListItem } from "./friends-list-item/FriendListItem"
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

export const FriendsList = ({friends}) => {
  return <ul className={styles.friendList}>
    {friends.map(({id, avatar, name, isOnline}) => {
      return <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
    })}
</ul>
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
}
