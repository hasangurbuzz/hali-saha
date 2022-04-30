import React from 'react';
import styled from "styled-components";

const SignUpForm = (props) => {
    const {status, toggler} = props
    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>

            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput/>

            <InputLabel>Şifre</InputLabel>
            <PasswordInput type={'password'}/>

            <InputLabel>Tekrar Şifre</InputLabel>
            <PasswordInput type={'password'}/>
            <SubmitButton>Kayıt Ol</SubmitButton>

        </Container>
    );
};

export default SignUpForm;


const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  border: solid;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: wheat;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
`

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;

`

const InputLabel = styled.label`

`

const UsernameInput = styled.input`
  margin: 5px;
  width: 50vh;
  align-items: center;
`

const PasswordInput = styled(UsernameInput)`
`

const SubmitButton = styled.button`
`
