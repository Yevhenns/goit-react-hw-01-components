import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css'

export const FriendListItem = ({ avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", name, isOnline }) => {
  return <li className={styles.item}>
    <span className={styles.status} style={{backgroundColor: isOnline ? 'blue' : 'red'}}>{isOnline}</span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}