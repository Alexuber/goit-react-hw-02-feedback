import PropTypes from 'prop-types';
import styles from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
