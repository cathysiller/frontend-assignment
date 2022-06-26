import React, { useState }  from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import Success from "./Success";

const Div = styled.div`
  background-color: #F7F8F8;
  left: 50%;
  //margin: auto auto;
  //max-height: 534px;
  //max-width: 622px;
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
    errorEmailMessage: ``,
    errorPasswordMessage: ``,
    errorCheckboxMessage: ``,
    passwordLength: ``,
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
    passwordLength,
    loading,
    signupSuccessful,
  } = formState;

  /*
  const [checked, setChecked] = useState(false)
  const handleCheck = () => setChecked(!checked)

  console.log(checked)
  */

  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      //console.log('I AM NOT CHECKED')
      setFormState({
        ...formState,
        signupSuccessful: false,
        errorCheckboxMessage: "Required"
      });
      return false;
    } 

    //console.log('I AM CHECKED')
    setFormState({
      ...formState,
      //signupSuccessful: true,
      errorCheckboxMessage: ""
    });
    return checked === true
  };

  const isEmpty = () => {
    if (password.length === 0 && email.length === 0) {
      setFormState({
        ...formState,
        signupSuccessful: false,
        email: ``,
        password: ``,
        errorEmailMessage: "Email required",
        errorPasswordMessage: "Password required",
        errorCheckboxMessage: "Required"
      });
      return true
    }
    return false
  }

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

  const isCheckboxValid = (e) =>  {
    const value = e.target.checked
    console.log(value)

    setFormState({
      ...formState,
      //signupSuccessful: true,
      errorCheckboxMessage: ""
    });
    return true
  }

  const handleChange = (e) => {
    //let passwordError = "";

    /*
    if (e.target.id === "password" && password.length < 6) {
      passwordError = "Password too short";
    }
    */

    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
      //passwordLength: passwordError //In here it display the error
    });
  }; 

  const onSubmit = async (e) => {
    e.preventDefault();

    const empty = isEmpty(email, password, checkbox);
    const passwordValid = isPasswordValid(password);
    const emailValid = isEmailValid(email);
    //const checkboxValid = handleCheck(checkbox)

    console.log(checkbox)
    //console.log(checked)

    if (empty) {
      setFormState({
        ...formState,
        signupSuccessful: false,
        email: ``,
        password: ``,
        checkbox: ``,
        errorEmailMessage: "Email required",
        errorPasswordMessage: "Password required",
        errorCheckboxMessage: "Required"
      });

      if (emailValid && passwordValid) {
        setFormState({
          ...formState,
          signupSuccessful: true,
          email: ``,
          password: ``,
          checkbox: ``,
          errorCheckboxMessage: ""
        });
      }
    }
  };

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
            //error={error}
            //checked={isCheckboxValid} 
            error={errorCheckboxMessage}
            id={checkbox}
            onChange={handleCheck}
            required
            type="checkbox"

            onClick={isCheckboxValid}
          />
          <Button
            //disabled={!formState.email}
            error={errorCheckboxMessage}
            name="action"
            onClick={onSubmit}
            primary={true}
            type="submit"
          >
            {!loading && `Sign up`}
          </Button>

          {loading && 
            <p>THIS IS LOADING 👏🏾</p>
          }

          {signupSuccessful && 
            <p>THIS IS SUCCESSFUL 👏🏾</p>
          }
        </StyledForm>
      </Div>
    )}
    </>
)}

export default Form;