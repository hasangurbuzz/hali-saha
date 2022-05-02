import React from 'react';
import styled from "styled-components";
import Card from "./Card";


const Home = (props) => {
    const {imageData} = props



    return (
        <Container>

            {imageData.map((data, index) =>
                <Card image={data.image} description={data.description} key={index}/>
            )}
        </Container>
    );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid black;
  padding: 0 100px 0 100px;


`


