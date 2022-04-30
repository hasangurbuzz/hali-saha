import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Header = () => {
    const admin = {username: "admin", password: 1234}

    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const [signUpFormStatus, setSignUpFormStatus] = useState(false)
    const [user, setUser] = useState("")

    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    const toggleSignUpForm = () => {
        setSignUpFormStatus(!signUpFormStatus)
    }

    const checkUserCred = ({username, password}) => {

    }


    return (
        <Container>
            <LogoImage src={'logo_new_transparent.png'}/>
            <div>
                <SignUpFormButton onClick={toggleSignUpForm}>Kayıt Ol</SignUpFormButton>
                <LoginFormButton onClick={toggleLoginForm}>Giriş Yap</LoginFormButton>
            </div>
            <LoginForm status={loginFormStatus} toggler={toggleLoginForm}/>
            <SignUpForm status={signUpFormStatus} toggler={toggleSignUpForm}/>

            {user && <div>Hoşgeldin {user}</div>}

        </Container>);
};

export default Header;

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

