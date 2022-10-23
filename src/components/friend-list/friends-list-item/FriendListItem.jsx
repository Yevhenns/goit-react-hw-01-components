export const FriendListItem = ({avatar, name, isOnline, key}) => {
  return <li class="item" key={key}>
    <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
</li>
  }