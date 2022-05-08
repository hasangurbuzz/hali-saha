import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Popup from "./components/UI/Popup";
import dummyHaliSaha from "./data/data";
import dummyUserList from "./data/users";

function App() {
    const [userList, setUserList] = useState(dummyUserList)
    const [user, setUser] = useState({username: '', password: ''})
    const [listOfHalisaha, setListOfHalisaha] = useState(dummyHaliSaha)
    const [popupState, setPopupState] = useState(false)
    const [popupInfo, setPopupInfo] = useState("")


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

    const popupHandler = () => {
        setPopupState(!popupState)
        setPopupInfo("")
    }
    const triggerPopup = (info) => {
        setPopupInfo(info)
        setPopupState(!popupState)

    }


    return (
        <div className="App">
            <Header user={user} userLogoutHandler={userLogoutHandler} loginHandler={loginHandler}
                    signUpHandler={signUpHandler} userList={userList} triggerPopup={triggerPopup}/>
            <Home user={user} listOfHaliSaha={listOfHalisaha} onAddReservationHandler={onAddReservationHandler}
                   triggerPopup={triggerPopup}/>
            <Popup info={popupInfo} popupStateHandler={popupHandler} show={popupState}/>


        </div>
    );
}

export default App;






