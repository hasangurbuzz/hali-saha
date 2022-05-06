import React, {useState} from 'react';
import styled from "styled-components";
import List from "./List";
import Panel from "./Panel";


const Home = (props) => {
    const {user, listOfHaliSaha,onAddReservationHandler} = props


    const [inputText, setInputText] = useState('')
    const [panelStatus, setPanelStatus] = useState(false)
    const [chosenElement, setChosenElement] = useState({})


    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const onConfirmationHandler = ()=>{
        onAddReservationHandler(chosenElement)
    }


    const panelStatusHandler = () => {
        setPanelStatus(!panelStatus)
    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
    }


    return (
        <Container>
            {panelStatus &&
                <Panel user={user} panelStatusHandler={panelStatusHandler} chosenElement={chosenElement}
                       onConfirmationHandler={onConfirmationHandler}
                />}

            {!panelStatus &&
                <>
                    <SearchBarWrapper>
                        <SearchBar value={inputText ?? ""} type={'text'} id={'searchbar'} placeholder={'Ara'}
                                   onChange={inputHandler}/>
                        <ClearButton onClick={() => setInputText('')}>Temizle</ClearButton>
                    </SearchBarWrapper>

                    <List listData={listOfHaliSaha} searchInput={inputText} chosenElementHandler={chosenElementHandler}
                          panelStatusHandler={panelStatusHandler}/>

                </>
            }


        </Container>
    );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid black;
  align-items: center;
  //padding: 0 100px 0 100px;

`


const SearchBar = styled.input`
  font-size: 14px;


`
const SearchBarWrapper = styled.div`
  display: flex;


`
const ClearButton = styled.button`

  border: solid 1px;
  border-radius: 2px;

`
