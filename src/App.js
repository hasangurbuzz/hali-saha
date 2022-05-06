import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
    const dummyHaliSaha = [
        {
            id: '1',
            name: 'edirne halı saha',
            image: 'hali-saha-1.jpg',
            address: 'Edirne',
            tel: '01234567891',
            chosenDates: [{
                time: ['11', '10'],
                date: '2022-05-06',
                username: 'admin'
            },
                {
                    time: ['12', '13', '14'],
                    date: '2022-05-07',
                    username: 'admin'
                }
            ]
        },
        {
            id: '2',
            name: 'Balkan halı saha',
            image: 'hali-saha-2.jpg',
            address: 'Edirne',
            tel: '01234567892',
            chosenDates: []
        },
        {
            id: '3',
            name: 'Ayşekadın halı saha',
            image: 'hali-saha-3.jpg',
            address: 'Edirne',
            tel: '01234567893',
            chosenDates: []
        },
        {
            id: '4',
            name: 'Selimiye halı saha',
            image: 'hali-saha-4.jpg',
            address: 'Edirne',
            tel: '01234567894',
            chosenDates: []
        },
        {
            id: '5',
            name: 'Sarayiçi halı saha',
            image: 'hali-saha-5.jpg',
            address: 'Edirne',
            tel: '01234567895',
            chosenDates: []
        },
        {
            id: '6',
            name: 'Şükrüpaşa halı saha',
            image: 'hali-saha-6.jpg',
            address: 'Edirne',
            tel: '01234567896',
            chosenDates: []
        },
    ]

    const dummyUserList = [
        {username: 'admin', password: '1234'},
        {username: 'user', password: '12345'}
    ]

    const [userList, setUserList] = useState(dummyUserList)
    const [user, setUser] = useState({username: 'admin', password: ''})
    const [listOfHalisaha, setListOfHalisaha] = useState(dummyHaliSaha)


    const signUpHandler = (user) => {
        setUserList([...userList, user])

    }
    const loginHandler = (user) => {
        setUser(user)
    }

    const userLogoutHandler = () => {
        setUser({username: '', password: ''})
    }

    const onAddReservationHandler = (element) => {
        let templist = listOfHalisaha.filter((x) => x.id !== element.id)
        setListOfHalisaha([...templist, element])


    }


    return (
        <div className="App">
            <Header user={user} userLogoutHandler={userLogoutHandler} loginHandler={loginHandler}
                    signUpHandler={signUpHandler} userList={userList}/>
            <Home user={user} listOfHaliSaha={listOfHalisaha} onAddReservationHandler={onAddReservationHandler}/>


        </div>
    );
}

export default App;






