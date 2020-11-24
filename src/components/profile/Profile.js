import PropTypes from 'prop-types';
import Stats from './Stats';
import styles from './Profile.module.css';

const defaultAvatar =
  'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg';
const defaultLocation = 'not show';

function Profile(profile) {
  const {
    name,
    tag,
    location = defaultLocation,
    avatar = defaultAvatar,
    stats,
  } = profile;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default Profile;
