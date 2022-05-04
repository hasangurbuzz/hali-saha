import React, {useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import List from "./List";
import Panel from "./Panel";


const Home = (props) => {
    const {imageData} = props

    const [user, setUser] = useState({username: 'admin'})
    const [inputText, setInputText] = useState('')
    const [panelStatus, setPanelStatus] = useState(false)
    const [chosenElement, setChosenElement] = useState({})


    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const listOfHalisaha = [
        {id: '1', name: 'edirne halı saha', image: 'hali-saha-1.jpg',address: 'Edirne', tel: '01234567891'},
        {id: '2', name: 'Balkan halı saha', image: 'hali-saha-2.jpg',address: 'Edirne', tel: '01234567892'},
        {id: '3', name: 'Ayşekadın halı saha', image: 'hali-saha-3.jpg',address: 'Edirne', tel: '01234567893'},
        {id: '4', name: 'Selimiye halı saha', image: 'hali-saha-4.jpg',address: 'Edirne', tel: '01234567894'},
        {id: '5', name: 'Sarayiçi halı saha', image: 'hali-saha-5.jpg',address: 'Edirne', tel: '01234567895'},
        {id: '6', name: 'Şükrüpaşa halı saha', image: 'hali-saha-6.jpg',address: 'Edirne', tel: '01234567896'},
    ]

    const panelStatusHandler = () => {
        setPanelStatus(!panelStatus)


    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
    }


    return (
        <Container>
            {/*<h1>Halı Sahalar</h1>*/}


            {panelStatus &&
                <Panel panelStatusHandler={panelStatusHandler} chosenElement={chosenElement}
                       />}

            {!panelStatus &&
                <>


                    <SearchBarWrapper>
                        <SearchBar value={inputText ?? ""} type={'text'} id={'searchbar'} placeholder={'Ara'}
                                   onChange={inputHandler}/>
                        <ClearButton onClick={() => setInputText('')}>Temizle</ClearButton>
                    </SearchBarWrapper>

                    <List listData={listOfHalisaha} searchInput={inputText} chosenElementHandler={chosenElementHandler}
                          panelStatusHandler={panelStatusHandler}/>

                </>
            }


            {!user.username &&
                <ImageWrapper>
                    {imageData.map((data, index) =>
                        <Card image={data.image} description={data.description} key={index}/>
                    )}
                </ImageWrapper>}
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px 0 100px;

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
