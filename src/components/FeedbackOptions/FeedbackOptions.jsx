import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(item => (
        <button
          className={`${styles.option + ' ' + styles[item]}`}
          key={nanoid()}
          type="button"
          name={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
