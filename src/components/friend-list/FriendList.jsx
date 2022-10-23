import PropTypes from 'prop-types'

import { FriendListItem } from "./friends-list-item/FriendListItem"

export const FriendsList = ({friends}) => {
  return <ul className="friend-list">
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
