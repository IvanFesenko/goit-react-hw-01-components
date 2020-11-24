import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const defaultAvatar =
  'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg';

function FriendListItem({ status, avatar = defaultAvatar, name }) {
  const onlineStatus = status
    ? `${styles.status} ${styles.isOnline}`
    : `${styles.status} ${styles.isOffline}`;
  return (
    <li className={styles.item}>
      <span className={onlineStatus}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="80" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
