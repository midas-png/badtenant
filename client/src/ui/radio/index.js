import PropTypes from 'prop-types';
import { RadioLabel, RadioInput, RadioLabelText } from './styles';

export const RadioButton = ({ id, label, value, isFontDark, onChange }) => {
  return (
    <RadioLabel>
      <RadioInput id={id} checked={value} onChange={onChange} />
      <RadioLabelText htmlFor={id} isFontDark={isFontDark}>
        {label}
      </RadioLabelText>
    </RadioLabel>
  );
};

RadioButton.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  value: PropTypes.bool,
  isFontDark: PropTypes.bool,
  onChange: PropTypes.func,
};