import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ list }) {
  return (
    <ul className={styles.friend_list}>
      {list.map(item => {
        const { id, isOnline, name, avatar } = item;
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
