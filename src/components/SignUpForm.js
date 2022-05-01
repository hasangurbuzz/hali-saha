import React, {useState} from 'react';
import styled from "styled-components";

const SignUpForm = (props) => {
    const {status, toggler, addNewUser} = props
    const [user, setUser] = useState({username: '', password: '', password_again: ''})

    const isPasswordsMatching = (user) => {
        return user.password === user.password_again
    }

    const submitUser = (user) => {
        if (isPasswordsMatching(user)){
            addNewUser({username:user.username,password:user.password}) ? alert('kullanıcı adı alınmış') : alert('kayıt tamam')
        }
        else {console.log('not matching')}
    }

    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>

            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput onChange={(e) => setUser({...user, username: e.target.value})}/>

            <InputLabel>Şifre</InputLabel>
            <PasswordInput onChange={(e) => setUser({...user, password: e.target.value})} type={'password'}/>

            <InputLabel>Tekrar Şifre</InputLabel>
            <PasswordInput onChange={(e) => setUser({...user, password_again: e.target.value})} type={'password'}/>
            <SubmitButton onClick={() => {
                submitUser(user)
            }}>Kayıt Ol</SubmitButton>

        </Container>
    );
};

export default SignUpForm;

//Styling part


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

  transform: ${props => {
    const {show} = props;
    return show ? 'translateX(0)' : 'translateX(100%)';
  }};
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
