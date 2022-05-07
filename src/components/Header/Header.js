import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./User/LoginForm";
import SignUpForm from "./User/SignUpForm";

const Header = (props) => {

    const {user, userLogoutHandler} = props


    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const [signUpFormStatus, setSignUpFormStatus] = useState(false)

    // const [error, setError] = useState(false) error visualization

    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    const toggleSignUpForm = () => {
        setSignUpFormStatus(!signUpFormStatus)
    }

    return (
        <Container>
            <LogoImage src={'logo_new_transparent.png'} onClick={()=>window.location.href='/'}/>

            {/*Show signup & login buttons when user not logged in*/}
            {!user.username &&
                <ButtonWrapper>
                    <SignUpFormButton onClick={toggleSignUpForm}>Kaydol</SignUpFormButton>
                    <LoginFormButton onClick={toggleLoginForm}>Giriş Yap</LoginFormButton>
                </ButtonWrapper>
            }

            <LoginForm status={loginFormStatus} toggler={toggleLoginForm} loginHandler={props.loginHandler} userList={props.userList}/>
            <SignUpForm status={signUpFormStatus} toggler={toggleSignUpForm} signUpHandler={props.signUpHandler} userList={props.userList}/>

            {/*Show logout button if user logged in*/}
            {user.username && <div>
                <button onClick={userLogoutHandler}>{user.username}</button>
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
  position: fixed;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 1px 1px 10px 1px;

`

const LogoImage = styled.img`
  width: 25vw;
  min-width: 150px;
`

const LoginFormButton = styled.button`
  margin: 5px;
  background: transparent;
  color: white;
  border: none;
  font-weight: 600;
  cursor:pointer;
  :hover {
    border: solid 2px white;
    border-radius: 5px;
    padding: 2px;
  }
  
`

const SignUpFormButton = styled(LoginFormButton)`
`

const ButtonWrapper = styled.div`
`

