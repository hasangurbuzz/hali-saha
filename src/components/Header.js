import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Header = () => {

    const dummyUserList = [
        {username: 'admin', password: '1234'},
        {username: 'user', password: '12345'}

    ]

    const [userList, setUserList] = useState(dummyUserList)

    console.log(userList)
    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const [signUpFormStatus, setSignUpFormStatus] = useState(false)
    const [user, setUser] = useState({username: '', password: ''})
    const [error, setError] = useState(false)

    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    const toggleSignUpForm = () => {
        setSignUpFormStatus(!signUpFormStatus)
    }


    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }

    const loginUser = (user) => {
        //not much necessary
        if (!checkUserExists(user)) {
            alert('Kullanıcı bulunamadı')
            setError(true)
            return false
            // user.username === admin.username && user.password === admin.password
        } else if (userList.some((e) => e.username === user.username && e.password === user.password)) {
            setUser(user)
            setError(false)
            return true
        } else {
            alert('Yanlış şifre')
            setError(true)
            return false
        }
    }

    const addNewUser = (user) => {
        if (checkUserExists(user)) {
            return true
        } else {
            setUserList((list) => {
                return [...list, user]
            })
            return false
        }
    }
    return (
        <Container>
            <LogoImage src={'logo_new_transparent.png'}/>

            {!user.username &&
                <ButtonWrapper>
                    <SignUpFormButton onClick={toggleSignUpForm}>Kayıt Ol</SignUpFormButton>
                    <LoginFormButton onClick={toggleLoginForm}>Giriş Yap</LoginFormButton>
                </ButtonWrapper>
            }

            <LoginForm error={error} status={loginFormStatus} toggler={toggleLoginForm} loginUser={loginUser}/>
            <SignUpForm status={signUpFormStatus} toggler={toggleSignUpForm} addNewUser={addNewUser}/>

            {user.username && <div>
                <button onClick={() => setUser({username: '', password: ''})}>{user.username}</button>
            </div>}


        </Container>);
};

export default Header;

//Styling part


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 20px;

`

const LogoImage = styled.img`
  width: 25vw;
  min-width: 150px;
`

const LoginFormButton = styled.button`
  margin: 2px;
`

const SignUpFormButton = styled(LoginFormButton)`
`

const ButtonWrapper = styled.div`
`

