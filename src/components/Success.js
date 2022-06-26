import React from 'react';
import styled from 'styled-components';
import check from '../images/check.svg';
import logo from '../images/logo.svg';
import racecar from '../images/racecar.svg';

const StyledDiv = styled.div`
  align-items: center;
  background: #F7F8F8;
  display: flex;
  flex-direction: column;
  gap: 48px;
  //height: 425.88px;
  justify-content: center;
  letter-spacing: -0.01em;
  padding: 80px 0px;
  //width: 622px;

  //margin: auto auto 32px;
  //max-height: 534px;
  //max-width: 622px;
  width: 100%;

  /*
  :disabled {
    background-color: #FEDA8A;
  }
  */
`

const Header = styled.h1`
  color: #141E35;
  font-family: 'Inter';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  margin: 0 0;
  text-align: center;
`

const Text = styled.p`
  color: #141E35;
  font-family: 'Inter';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  margin: 0 0;
  text-align: center;
`

const Success = ({ 
  disabled,
  name,
  onClick,
  type
}) => {

  return (
    <StyledDiv>
      <img src={check} alt="Checkmark" />
      <div>
      <Header>Thank you!</Header>
      <Text>Please check your email.</Text>
      </div>
      <img src={racecar} alt="Success" />
    </StyledDiv>
  )
}

export default Success