import React, {useState} from 'react';
import styled from "styled-components";

const SignUpForm = (props) => {
    const {status, toggler, addNewUser} = props
    const [user, setUser] = useState({username: '', password: '', password_again: ''})

    //check inputs are matching
    const isPasswordsMatching = (user) => {
        return user.password === user.password_again
    }

    //send user data to parent component
    const submitUser = (user) => {
        if (isPasswordsMatching(user)) {
            // addNewUser({username: user.username, password: user.password}) ? alert('kullanıcı adı alınmış') : alert('Kayıt tamamlandı')
            if(addNewUser({username: user.username, password: user.password})){
                alert('Kullanıcı adı alınmış')
            }
            else {
                toggler()
                alert('kayıt tamamlandı')
            }
        } else {
            alert('Şifreler uyuşmuyor')
        }
        //not necessary for state management
        resetInputValue(document.getElementById('signupUsername'))
        resetInputValue(document.getElementById('signupPassword'))
        resetInputValue(document.getElementById('signupPasswordAgain'))
        resetUserValue()
    }

    const resetInputValue = (e) => {
        e.value = ""
        resetUserValue()
    }
    const resetUserValue = () => {
        setUser({username: '', password: '',password_again: ''})
    }


    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
            </CloseButtonWrapper>

            <InputLabel>Kullanıcı Adı</InputLabel>
            <UsernameInput id={'signupUsername'} onChange={(e) => setUser({...user, username: e.target.value})}/>

            <InputLabel>Şifre</InputLabel>
            <PasswordInput id={'signupPassword'} onChange={(e) => setUser({...user, password: e.target.value})} type={'password'}/>

            <InputLabel>Tekrar Şifre</InputLabel>
            <PasswordInput id={'signupPasswordAgain'}
                onChange={(e) => setUser({...user, password_again: e.target.value})} type={'password'}
                onKeyDown={(e) => {
                    e.key === "Enter" && submitUser(user)
                }}/>
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
  width: 200px;
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
  width: 200px;

`

const InputLabel = styled.label`

`

const UsernameInput = styled.input`
  margin: 5px;
  width: 15vw;
  align-items: center;
  border-radius: 10px;
  padding: 3px;
  min-width: 120px;



`

const PasswordInput = styled(UsernameInput)`
`

const SubmitButton = styled.button`
`
