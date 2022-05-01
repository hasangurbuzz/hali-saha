import React, {useState} from 'react';
import styled from "styled-components";

const LoginForm = (props) => {
    const {status, toggler, loginUser, error} = props
    const [user, setUser] = useState({username: '', password: ''})
    const [passwordStatus, setPasswordStatus] = useState(false)


    const resetInputValue = (e) => {
        e.value = ""
        resetUserValue()
    }
    const resetUserValue = () => {
        setUser({username: '', password: ''})
    }
    const submitValues = () => {
        loginUser(user) && toggler()
        resetInputValue(document.getElementById('username'))
        resetInputValue(document.getElementById('password'))
    }

    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>


            {/*inputs*/}
            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput error={error} id={'username'}
                           onChange={(e) => setUser({...user, username: e.target.value})}/>

            <InputLabel>Şifre</InputLabel>
            <PasswordWrapper>
                <PasswordInput error={error} id={'password'}
                               type={passwordStatus ? 'text' : 'password'}
                               onChange={(e) => setUser({...user, password: e.target.value})}
                               onKeyDown={(e) => {
                                   e.key === "Enter" && submitValues()
                               }}
                />
                <ShowHidePasswordButton onChange={() => setPasswordStatus(!passwordStatus)}
                                        type={'checkbox'}/>
            </PasswordWrapper>


            <SubmitButton onClick={submitValues}>Giriş Yap</SubmitButton>


        </Container>
    );
};

export default LoginForm;


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
  width: 40vh;
  align-items: center;
  border: solid ${props => {
    const {error} = props;
    return error ? 'red' : 'white';
  }};
  border-radius: 10px;
  padding: 3px;

`

const PasswordInput = styled(UsernameInput)`
  ${props => {
    const {show} = props;
    return show ? "type" : 'text';
  }};
  border: solid ${props => {
    const {error} = props;
    return error ? 'red' : 'white';
  }};
`

const SubmitButton = styled.button`
`
const PasswordWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ShowHidePasswordButton = styled.input`
  position: fixed;
  background: transparent;
  right: 30px;

`