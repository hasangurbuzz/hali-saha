import React, {useState} from 'react';
import styled from "styled-components";
import Popup from "../../UI/Popup";

const LoginForm = (props) => {
    const {status, toggler, loginHandler, userList} = props
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value)
    }
    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value)
    }
    const passwordHideHandler = () => {
        setPasswordStatus(!passwordStatus)
    }
    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }

    const loginUser = (user) => {

        //not much necessary
        if (!checkUserExists(user)) {
            alert("Kullanıcı Bulunamadı")
            return false

        } else if (userList.some((e) => e.username === user.username && e.password === user.password)) {
            loginHandler(user)
            return true
        } else {
            alert('Yanlış şifre')
            return false
        }

    }

    const submitValues = (e) => {
        e.preventDefault()

        loginUser({username: inputUsername, password: inputPassword}) && toggler()

        setInputUsername('')
        setInputPassword('')
        // setUser({username: inputUsername,password: inputPassword})

    }


    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <CloseButton onClick={toggler}>&times;</CloseButton>
            </CloseButtonWrapper>

            <form onSubmit={submitValues}>
                <InputWrapper>
                    <InputLabel>Kullanıcı Adı</InputLabel>
                    <UsernameInput type={"text"} value={inputUsername} onChange={inputUsernameHandler}/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Şifre</InputLabel>
                    <PasswordInput value={inputPassword} onChange={inputPasswordHandler}
                                   type={passwordStatus ? 'text' : 'password'}/>
                    <ShowHidePasswordButton onChange={passwordHideHandler}
                                            type={'checkbox'}/>
                </InputWrapper>

                <SubmitButton type="submit">Giriş Yap</SubmitButton>

            </form>

            {/*<Popup show={popupState} popupStateHandler={popupHandler} info={popupInfo}/>*/}


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
  width: 400px;
  z-index: 16;
  list-style: none;
  padding: 40px 40px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/shoe.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: -10px 0 20px -5px;

  transform: ${props => {
    const {show} = props;
    return show ? 'translateX(0)' : 'translateX(100%)';
  }};
  transition: transform 0.2s;
`



const InputLabel = styled.label`
  font-size: 16px;
  text-align: left;
  width: 8vw;
  color: white;
  font-weight: 500;


`


const UsernameInput = styled.input`
  margin: 15px 0 5px 5px;
  width: 15vw;
  align-items: center;
  border-radius: 5px;
  padding: 3px;
  min-width: 120px;
  font-size: 16px;
`

const PasswordInput = styled(UsernameInput)`
  ${props => {
    const {show} = props;
    return show ? "type" : 'text';
  }};
`

const SubmitButton = styled.button`
  margin-top: 20px;
  background: darkgreen;
  cursor: pointer;
  color: white;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;

  :active {
    transform: scale(0.9);
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ShowHidePasswordButton = styled.input`
  position: fixed;
  background: transparent;
  right: 20px;
  width: 20px;
  height: 20px;

`

const CloseButton = styled.button`
  border: none;
  border-radius: 2px;
  right: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 30px;
  
  :hover {
    color: red;
  }


`

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25vw;
  

`