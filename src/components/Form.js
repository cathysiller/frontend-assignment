import React, { useState }  from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import Success from "./Success";

const Div = styled.div`
  background-color: #F7F8F8;
  left: 50%;
  padding: 80px 110px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  max-height: 534px;
  max-width: 622px;
  width: 100%;
`;

const Header = styled.h1`
  color: #141E35;
  font-family: Inter,sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 39px;
  margin: auto auto 32px;
  text-align: center;
  width: 464px;
`;

const StyledForm = styled.form`
`

const Form = () => {
  const [formState, setFormState] = useState({
    email: ``,
    password: ``,
    checkbox: ``,
    checked: false,
    errorEmailMessage: ``,
    errorPasswordMessage: ``,
    errorCheckboxMessage: ``,
    signupSuccessful: false,
    loading: false,
  });

  //destructure the state
  const {
    email,
    password,
    checkbox,
    errorEmailMessage,
    errorPasswordMessage,
    errorCheckboxMessage,
    loading,
    signupSuccessful,
  } = formState;

  // check if email and password are empty, display required error message
  const isEmpty = () => {
    if (password.length === 0 && email.length === 0) {
      setFormState({
        ...formState,
        signupSuccessful: false,
        email: ``,
        password: ``,
        errorEmailMessage: "Invalid email",
        errorPasswordMessage: "Password too short",
        errorCheckboxMessage: "Required"
      });
      return true
    }
    return false
  }

  // if email is not empty, check if valid email address
  const isEmailValid = (value) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(value)) {
      setFormState({
        ...formState,
        errorEmailMessage: "Invalid email"
      });
      return false;
    } else if (errorEmailMessage) {
      setFormState({
        ...formState,
        errorEmailMessage: ""
      });
    }
    return true;
  };

  // if password is not empty, check if valid password
  const isPasswordValid = (password) => {
    if (password.length <= 5) {
      // if password does not meet requirements, let user know invalid
      setFormState({
        ...formState,
        errorPasswordMessage: "Password too short"
      });
      return false;
    } else if (errorPasswordMessage) {
      setFormState({
        ...formState,
        errorPasswordMessage: ""
      });
    }
    return true;
  }

  // see if checkbox is checked or not, required for submission
  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (checked === false) {
      setFormState({
        ...formState,
        errorCheckboxMessage: "Required",
        checked: false,
      });
      return false;
    } else if (errorCheckboxMessage) {
      setFormState({
        ...formState,
        errorCheckboxMessage: ""
      });
    }

    setFormState({
      ...formState,
      errorCheckboxMessage: "",
      checked: true,
    });
    return true
  };

  // update input values on change
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  }; 

  const onSubmit = async (e) => {
    e.preventDefault();

    const empty = isEmpty(email, password);
    const passwordValid = isPasswordValid(password);
    const emailValid = isEmailValid(email);
    const checkboxValid = formState.checked

    if (empty && checkboxValid === false) {
      setFormState({
        ...formState,
        signupSuccessful: false,
        email: ``,
        password: ``,
        checkbox: ``,
        errorEmailMessage: "Invalid email",
        errorPasswordMessage: "Password too short",
        errorCheckboxMessage: "Required"
      });
    }

    if (!empty) {
      if (emailValid && passwordValid && checkboxValid === true) {
        setFormState({
          ...formState,
          signupSuccessful: true,
          email: ``,
          password: ``,
          checkbox: ``,
          checked: true,
          errorEmailMessage: "",
          errorPasswordMessage: "",
          errorCheckboxMessage: ""
        });
      }
    }
  };

  console.log(formState)
  //console.log(signupSuccessful)

  return (
    <>
    {signupSuccessful && !loading ? (
      <Div>
        <Success />
      </Div>
    ) : (
      <Div>
        <Header>
          Let’s sign you up for Timescale Cloud
        </Header>
        <StyledForm onSubmit={onSubmit}>
          <InputField
            error={errorEmailMessage}
            id="email"
            label="Email address"
            onChange={handleChange}
            required
            type="text"
            value={email}
          />
          <InputField
            error={errorPasswordMessage}
            id="password"
            isPassword
            label="Create password"
            onChange={handleChange}
            required
            type="password"
            value={password}
          />
          <Checkbox
            error={errorCheckboxMessage}
            id={checkbox}
            onChange={handleCheck}
            required
            type="checkbox"
          />
          <Button
            error={errorCheckboxMessage}
            name="action"
            onClick={onSubmit}
            primary={true}
            type="submit"
          >
            {!loading && `Sign up`}
          </Button>
        </StyledForm>
      </Div>
    )}
    </>
)}

export default Form;