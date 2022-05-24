import React, {useState} from 'react';
import List from "./List";
import Panel from "./Panel";
import "./Home.css"


const Home = (props) => {
    const {user, listOfHaliSaha, onAddReservationHandler, triggerPopup} = props


    const [inputText, setInputText] = useState('')
    const [panelStatus, setPanelStatus] = useState(false)
    const [chosenElement, setChosenElement] = useState({})


    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const onConfirmationHandler = () => {
        onAddReservationHandler(chosenElement)
    }


    const panelStatusHandler = () => {
        setPanelStatus(!panelStatus)
    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
    }


    return (
        <div className={'home-container'}>
            {panelStatus &&
                <Panel user={user} panelStatusHandler={panelStatusHandler} chosenElement={chosenElement}
                       onConfirmationHandler={onConfirmationHandler} triggerPopup={triggerPopup}
                />}


            {!panelStatus &&
                <>
                    <div className={'search-bar-wrapper'}>
                        <input className={'search-bar'} value={inputText ?? ""} type={'text'}
                               placeholder={'Ara'}
                               onChange={inputHandler}/>
                        <button className={'search-bar-clear-btn'} onClick={() => setInputText('')}>&times;</button>
                    </div>

                    <List listData={listOfHaliSaha} searchInput={inputText}
                          chosenElementHandler={chosenElementHandler}
                          panelStatusHandler={panelStatusHandler}/>

                </>
            }

            <div className={'rolling-ball'}/>
        </div>
    );
};

export default Home;
