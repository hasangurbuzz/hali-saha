import React, {useState} from 'react';
import styled from "styled-components";
import Popup from "../../UI/Popup";

const SignUpForm = ({status, toggler, signUpHandler, userList}) => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordAgain, setInputPasswordAgain] = useState('')

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value)
    }
    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value)
    }
    const inputPasswordAgainHandler = (e) => {
        setInputPasswordAgain(e.target.value)
    }

    //check input passwords are matching
    const arePasswordsMatching = () => {
        return inputPassword === inputPasswordAgain
    }
    const generateUser = (username, password) => {
        return {username: username, password: password}
    }
    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }
    const addNewUser = (user) => {
        if (checkUserExists(user)) {
            // setError(true)
            return true
        } else {
            signUpHandler(user)
            return false
        }
    }


    const submitValues = (e) => {
        e.preventDefault()
        if (arePasswordsMatching()) {
            if (addNewUser(generateUser(inputUsername, inputPassword))) {
                alert("Kullanıcı adı alınmış")
            } else {
                toggler()
                alert("Kayıt tamamlandı")
            }
        } else {
            alert('Şifreler uyuşmuyor')
        }
        setInputUsername('')
        setInputPassword('')
        setInputPasswordAgain('')

    }

    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <CloseButton onClick={toggler}>&times;</CloseButton>
            </CloseButtonWrapper>

            <div>
                <form onSubmit={submitValues}>
                    <InputWrapper>
                        <InputLabel>Kullanıcı Adı</InputLabel>
                        <UsernameInput type={"text"} value={inputUsername} onChange={inputUsernameHandler}/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel>Şifre</InputLabel>
                        <PasswordInput value={inputPassword} onChange={inputPasswordHandler} type={'password'}/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel>Şifre Tekrar</InputLabel>
                        <PasswordInput value={inputPasswordAgain} onChange={inputPasswordAgainHandler}
                                       type={'password'}/>
                    </InputWrapper>

                    <SubmitButton type="submit">Kaydol</SubmitButton>

                </form>
            </div>

        </Container>
    );
};

export default SignUpForm;

//Styling part
const CloseButton = styled.button`
  border: none;
  border-radius: 2px;
  right: 0;
  background: transparent;
  color: white;
  cursor:pointer;
  font-size: 20px;
  :hover{
    color: red;
  }
  

`

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 250px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/ball.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: -10px 0 20px -5px;

  transform: ${props => {
    const {show} = props;
    return show ? 'translateX(0)' : 'translateX(100%)';
  }};
  transition:all ease-in-out 0.2s;
`

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;

`

const InputLabel = styled.label`
  font-size: 12px;
  text-align: left;
  width: 8vw;
  color: white;
  font-weight: 500;

`

const UsernameInput = styled.input`
  margin: 5px 0 5px 5px;
  width: 15vw;
  align-items: center;
  border-radius: 5px;
  padding: 3px;
  min-width: 120px;
  font-size: 12px;

`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PasswordInput = styled(UsernameInput)`
`

const SubmitButton = styled.button`
      margin-top: 20px;
      background: darkgreen;
      cursor: pointer;
      color: white;
      font-size: 15px;
      padding: 10px 20px 10px 20px;
      border-radius: 5px;
      :active{
        transform: scale(0.9);
      }
  
`
