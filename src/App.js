import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
    const imageData = [
        {image: "team.jpg", description: "Takımını Kur"},
        {image: "ball.jpg", description: "Top Seçenekleri"},
        {image: "shoe.jpg", description: "Ayakkabı Seçenekleri"}
    ]
    const dummyUserList = [
        {username: 'admin', password: '1234',randevu:'pazar'},
        {username: 'user', password: '12345',randevu: 'pazartesi'}
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
            <Home imageData={imageData}/>





        </div>
    );
}

export default App;






