import React, {useState} from 'react';
import styled from "styled-components";

const LoginForm = (props) => {
    const {status, toggler} = props
    const [user, setUser] = useState({name: '', password: ''})
    const [passwordStatus, setPasswordStatus] = useState(false)


    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>

            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput onChange={(e) => setUser({...user, name: e.target.value})}/>

            <InputLabel>Şifre</InputLabel>
            <PasswordInput onChange={(e) => setUser({...user, password: e.target.value})}
                           type={passwordStatus ? 'text' : 'password'}/>

            <SubmitButton onClick={() => console.log(user)}>Giriş Yap</SubmitButton>
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
