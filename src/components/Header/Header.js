import React, { useState } from 'react';
import LoginForm from "./User/LoginForm";
import SignUpForm from "./User/SignUpForm";
import './Header.css'
import AdminLoginForm from './Admin/AdminLoginForm';

const Header = (props) => {

    const {
        user, userLogoutHandler,
        admin, adminLogoutHandler,
        createModeToggler,
        triggerPopup
    } = props



    const [loginFormStatus, setLoginFormStatus] = useState(false)
    const [signUpFormStatus, setSignUpFormStatus] = useState(false)
    const [adminFormStatus, setAdminFormStatus] = useState(false)


    const toggleLoginForm = () => {
        setLoginFormStatus(!loginFormStatus)
    }

    const toggleSignUpForm = () => {
        setSignUpFormStatus(!signUpFormStatus)
    }

    const toggleAdminForm = () => {
        setAdminFormStatus(!adminFormStatus)
    }

    return (
        <div className={'header-container'}>
            <img className={'header-logo'} src={'logo_new_transparent.png'} onClick={() => window.location.href = '/'}
                alt={''} />

            {/*Show signup & login buttons when user not logged in*/}
            {!user.username && !admin.username &&
                <div className={'form-button-wrapper'}>
                    <button className={'form-button'} onClick={toggleSignUpForm}>Kaydol</button>
                    <button className={'form-button'} onClick={toggleLoginForm}>Giriş Yap</button>
                    <button className={'form-button'} onClick={toggleAdminForm}>Yönetici Girişi</button>
                </div>
            }

            <LoginForm
                status={loginFormStatus}
                toggler={toggleLoginForm}
                loginHandler={props.loginHandler}
                userList={props.userList}
                triggerPopup={triggerPopup} />

            <SignUpForm
                status={signUpFormStatus}
                toggler={toggleSignUpForm}
                signUpHandler={props.signUpHandler}
                userList={props.userList}
                triggerPopup={triggerPopup} />

            <AdminLoginForm
                status={adminFormStatus}
                toggler={toggleAdminForm}
                adminLoginHandler={props.adminLoginHandler}
                adminList={props.adminList}
                triggerPopup={triggerPopup} />

            {/*Show logout button if user logged in*/}
            {user.username && <div>
                <button
                    className={'form-button'}
                    onClick={userLogoutHandler}
                >{user.username}</button>
            </div>
            }
            {admin.username && <div>
                <button
                    className='form-button'
                    onClick={createModeToggler}>Halı Saha Ekle</button>
                <button
                    className={'form-button'}
                    onClick={adminLogoutHandler}>{admin.username}</button>
            </div>
            }

        </div>
    );
};

export default Header;
