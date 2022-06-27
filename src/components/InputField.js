import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const Label = styled.label`
  align-items: center;
  color: #141E35;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 24px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 16px 12px;
  width: -webkit-fill-available;

  :error {
    border-color: #F54545;
  }
`;

const Error = styled.p`
  align-items: center;
  color: #F54545;
  display: flex;
  font-family: JetBrains Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 20px;
  margin: 0 0;
`;

const InputField = ({ 
    error,
    id,
    label,
    onChange,
    placeholder,
    required,
    type,
    value,
  }) => {

  return (
    <FormGroup>
      <Label>
        {label}
      </Label>
      <Input
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </FormGroup>
  );
};

export default InputField;