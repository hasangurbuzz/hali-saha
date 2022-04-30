import React from 'react';
import styled from "styled-components";

const LoginForm = (props) => {
    const {status,toggler} = props
    return (
        <Container show={status}>
            <button onClick={toggler}>close</button>
        </Container>
    );
};

export default LoginForm;


const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: red;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transition: transform 0.2s;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
`