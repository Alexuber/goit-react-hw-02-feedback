import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

export const Notification = ({ message }) => (
  <p className={styles.alert}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};
