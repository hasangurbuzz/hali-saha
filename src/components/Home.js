import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import List from "./List";


const Home = (props) => {
    const {imageData} = props

    const listOfHalisaha = [
        {id: '1', name: 'edirne halı saha', image: 'hali-saha-1.jpg'},
        {id: '2', name: 'Balkan halı saha', image: 'hali-saha-2.jpg'},
        {id: '3', name: 'Ayşekadın halı saha', image: 'hali-saha-3.jpg'},
        {id: '4', name: 'Selimiye halı saha', image: 'hali-saha-4.jpg'},
        {id: '5', name: 'Sarayiçi halı saha', image: 'hali-saha-5.jpg'},
        {id: '6', name: 'Toki halı saha', image: 'hali-saha-6.jpg'},
    ]


    return (
        <Container>
            <h1>Halı Sahalar</h1>

            <List data={listOfHalisaha}/>


            <ImageWrapper>
                {/*{imageData.map((data, index) =>*/}
                {/*    <Card image={data.image} description={data.description} key={index}/>*/}
                {/*)}*/}
            </ImageWrapper>
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

