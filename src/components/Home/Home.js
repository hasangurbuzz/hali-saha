import React, {useState} from 'react';
import styled from "styled-components";
import List from "./List";
import Panel from "./Panel";
import Popup from "../UI/Popup";


const Home = (props) => {
    const {user, listOfHaliSaha, onAddReservationHandler, popupHandler} = props


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
        <Container>
            {panelStatus &&
                <Panel user={user} panelStatusHandler={panelStatusHandler} chosenElement={chosenElement}
                       onConfirmationHandler={onConfirmationHandler}
                />}

            {!panelStatus &&
                <>
                    <SearchBarWrapper>
                        <SearchBar value={inputText ?? ""} type={'text'}
                                   placeholder={'Ara'}
                                   onChange={inputHandler}/>
                        <ClearButton onClick={() => setInputText('')}>&times;</ClearButton>
                    </SearchBarWrapper>

                    <List listData={listOfHaliSaha} searchInput={inputText}
                          chosenElementHandler={chosenElementHandler}
                          panelStatusHandler={panelStatusHandler}/>

                </>
            }

            <RollingBall/>
        </Container>
    );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 50px;




`


const SearchBar = styled.input`
  font-size: 16px;
  border-radius: 2px;
  border: none;
  padding: 10px;
  width: 30vw;
  
  



`
const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;

`
const ClearButton = styled.button`
  position: absolute;
  border: none;
  border-radius: 2px;
  right: 5px;
  background: transparent;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }


`

const RollingBall = styled.div`
  background: url("/images/football.png") center;
  background-size: cover;
  position: fixed;
  animation-fill-mode: forwards;
  width: 150px;
  height: 150px;
  //animation: hideme 5s, slidein 4s;
  animation: hide 0s ,rollin 5s forwards;


  @-webkit-keyframes hide {
    to {
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  @keyframes hide {
    to {
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
  @keyframes rollin {
    from {
      margin-left: 200%;
      transform: rotate(0deg);
    }

    to {
      margin-left: -200%;
      transform: rotate(-1500deg);
      width: 100px;
      height: 100px;
      display: none;


    }
  }
 

`
