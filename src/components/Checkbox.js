import React from 'react';
import styled from 'styled-components';

const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
`;

const Input = styled.input`
  appearance: auto;
  background: #FFFFFF;
  border: 1px solid #C1C1C1;
  box-sizing: border-box;
  height: 16px;
  margin: 0 0 8px;
  width: 16px;

  ${({ error }) => error && `
    appearance: initial;
    border: 2px solid #F54545;
  `}
`;

const Label = styled.label`
  align-items: center;
  color: #333333;
  font-family: Inter,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  height: 20px;
  letter-spacing: -0.01em;
  line-height: 20px;
  margin-left: 16px;
`

const Error = styled.p`
  align-items: center;
  color: #F54545;
  display: flex;
  font-family: 'JetBrains Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 20px;
  margin: 0 0;
`

const Checkbox = ({ error, id, onChange}) => (
  <CheckboxGroup>
    <Div>
      <Input
        error={error}
        id={id}
        onChange={onChange}
        required
        type="checkbox"
      />
      <Label>
        I agree to the Timecale Cloud Terms of Service
      </Label>
    </Div>
    {error && <Error>{error}</Error>}
  </CheckboxGroup>
);

export default Checkbox;
