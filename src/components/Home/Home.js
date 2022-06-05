import React, { useState } from 'react';
import List from "../UI/List";
import Detail from "./Detail"
import "./Home.css"
import SearchBar from '../UI/SearchBar';


const Home = (props) => {
    const { user, listOfHaliSaha, onAddReservationHandler, triggerPopup } = props


    const [inputText, setInputText] = useState('')
    const [detailPanelStatus, setDetailPanelStatus] = useState(false)
    const [chosenElement, setChosenElement] = useState({})


    const inputHandler = (input) => {
        setInputText(input);

    };

    const onConfirmationHandler = () => {
        onAddReservationHandler(chosenElement)
    }


    const detailPanelToggler = () => {
        setDetailPanelStatus(!detailPanelStatus)
    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
        detailPanelToggler()
    }

    const clearSearchHandler = () => {
        setInputText('')
    }

    return (
        <div className={'home-container'}>
            {detailPanelStatus &&
                <Detail
                    user={user}
                    detailPanelToggler={detailPanelToggler}
                    chosenElement={chosenElement}
                    onConfirmationHandler={onConfirmationHandler}
                    triggerPopup={triggerPopup}
                />}


            {!detailPanelStatus &&
                <>
                    <SearchBar
                        inputHandler={inputHandler}
                        inputText={inputText}
                        clearSearchHandler={clearSearchHandler} />

                    <List
                        listData={listOfHaliSaha}
                        searchInput={inputText}
                        chosenElementHandler={chosenElementHandler}
                        detailPanelToggler={detailPanelToggler} />

                </>
            }



            <div className={'rolling-ball'} />

        </div>
    );
};

export default Home;
