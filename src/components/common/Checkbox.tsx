import React, {useState} from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const Checkbox = () => {
  const [isChecked, setIsChecked] =useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <StyledCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
export default Checkbox;

const StyledCheckbox = styled.input`
  appearance: none;
  border-radius: 15px;
  width: 18px;
  height: 18px;
  border: ${props => props.checked ? `5px solid ${colors.green}` : `1px solid gray`};
  margin-right: 10px;
`;