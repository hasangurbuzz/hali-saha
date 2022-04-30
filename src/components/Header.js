import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm";

const Header = () => {

    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    return (
        <Container>
            <LogoImage src={'logo_new_transparent.png'}/>
            <div>
                <SignUpButton>Kayıt Ol</SignUpButton>
                <LoginButton onClick={toggleLoginForm}>Giriş Yap</LoginButton>
            </div>
            <LoginForm status={loginFormStatus} toggler={toggleLoginForm} />
            {/*<LogBar show={loginFormStatus}>*/}
            {/*    <button onClick={toggleLoginForm}>close</button>*/}
            {/*</LogBar>*/}
        </Container>);
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const LogoImage = styled.img`
  width: 25vw;
  min-width: 150px;
`

const LoginButton = styled.button`


`

const SignUpButton = styled(LoginButton)`
`


const LogBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: red;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transition: transform 0.2s;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

`