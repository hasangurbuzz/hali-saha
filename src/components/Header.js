import React, {useState} from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Header = (props) => {

    const {user, userLogoutHandler, addNewUser, loginUser} = props


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
            <LogoImage src={'logo_new_transparent.png'}/>

            {/*Show signup & login buttons when user not logged in*/}
            {!user.username &&
                <ButtonWrapper>
                    <SignUpFormButton onClick={toggleSignUpForm}>Kayıt Ol</SignUpFormButton>
                    <LoginFormButton onClick={toggleLoginForm}>Giriş Yap</LoginFormButton>
                </ButtonWrapper>
            }

            <LoginForm status={loginFormStatus} toggler={toggleLoginForm} loginUser={loginUser}/>
            <SignUpForm status={signUpFormStatus} toggler={toggleSignUpForm} addNewUser={addNewUser}/>

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

