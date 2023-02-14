import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => (
    <button key={nanoid()} type="button" name={item} onClick={onLeaveFeedback}>
      {item}
    </button>
  ));
};
