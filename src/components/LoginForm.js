import React, {useState} from 'react';
import styled from "styled-components";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const LoginForm = (props) => {
    const {status, toggler, checkUser} = props
    const [user, setUser] = useState({username: '', password: ''})
    const [passwordStatus, setPasswordStatus] = useState(false)

    const resetInputValue = (e) => {
        e.value = ""
        resetUserValue()
    }
    const resetUserValue = () => {
        setUser({username: '', password: ''})
    }

    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>

            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput id={'username'} onChange={(e) => setUser({...user, username: e.target.value})}/>

            <InputLabel>Şifre</InputLabel>
            <PasswordInput id={'password'} onChange={(e) => setUser({...user, password: e.target.value})}
                           type={passwordStatus ? 'text' : 'password'}/>

            <SubmitButton onClick={() => {
                const isUserFound = checkUser(user)
                isUserFound && toggler()

                resetInputValue(document.getElementById('username'))
                resetInputValue(document.getElementById('password'))
            }}>Giriş Yap</SubmitButton>
            <input onChange={(e) => setPasswordStatus(!passwordStatus)}
                   type={'checkbox'}/>


        </Container>
    );
};

export default LoginForm;


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
  ${props => props.show ? "type" : 'text'};
`

const SubmitButton = styled.button`
`
