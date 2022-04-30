import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Header = () => {
    const admin = {username: "admin", password: '1234'}

    const userList = [
        {username: 'admin', password: '1234'},
        {username: 'user', password: '1234'}

    ]

    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const [signUpFormStatus, setSignUpFormStatus] = useState(false)
    const [user, setUser] = useState({username: '', password: ''})

    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    const toggleSignUpForm = () => {
        setSignUpFormStatus(!signUpFormStatus)
    }


    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }


    const checkCredentials = (user) => {
        if (!checkUserExists(user)) {
            alert('Kullanıcı bulunamadı')
            return false

        } else if (user.username === admin.username && user.password === admin.password) {
            setUser(user)
            return true
        } else {
            alert('Kullanıcı adı veya şifre yanlış')


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

            <LoginForm status={loginFormStatus} toggler={toggleLoginForm} checkUser={checkCredentials}/>
            <SignUpForm status={signUpFormStatus} toggler={toggleSignUpForm}/>

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

