import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";


function App() {
    const dummyUserList = [
        {username: 'admin', password: '1234'},
        {username: 'user', password: '12345'}

    ]
    const [userList, setUserList] = useState(dummyUserList)
    const [user, setUser] = useState({username: '', password: ''})

    //Adding user from signup
    const addNewUser = (user) => {
        if (checkUserExists(user)) {
            // setError(true)
            return true
        } else {
            setUserList((list) => {
                return [...list, user]
            })
            return false
        }
    }

    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }

    //login user if exists and right credentials
    const loginUser = (user) => {
        //not much necessary
        if (!checkUserExists(user)) {
            alert('Kullanıcı bulunamadı')
            // setError(true)
            return false

        } else if (userList.some((e) => e.username === user.username && e.password === user.password)) {
            setUser(user)
            // setError(false)
            return true
        } else {
            alert('Yanlış şifre')
            // setError(true)
            return false
        }

    }


    return (
        <div className="App">
            <Header user={user} setUser={setUser} loginUser={loginUser} addNewUser={addNewUser}/>
        </div>
    );
}

export default App;


//Styling part


