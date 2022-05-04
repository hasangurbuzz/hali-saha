import React, {useState} from 'react';
import styled from "styled-components";

const SignUpForm = ({status, toggler, addNewUser}) => {
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

    }

    return (
        <Container show={status}>
            <CloseButtonWrapper>
                <button onClick={toggler}>close</button>
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

                    <SubmitButton type="submit">Kayıt Ol</SubmitButton>
                </form>
            </div>

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
  width: 250px;
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
  width: 250px;

`

const InputLabel = styled.label`
  font-size: 12px;
  text-align: left;
  width: 8vw;

`

const UsernameInput = styled.input`
  margin: 5px 0 5px 5px;
  width: 15vw;
  align-items: center;
  border-radius: 10px;
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
  margin-top: 5px;
`
