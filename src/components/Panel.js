import React from 'react';
import styled from "styled-components";
import Card from "./Card";
const Panel = ({panelStatusHandler,chosenElement,inputHandler}) => {
    const {name,image} = chosenElement
    return (
        <Container>
            <button onClick={()=>{
                panelStatusHandler()


            }} >Close</button>
            <Card image={image} description={name}/>
        </Container>
    );
};

export default Panel;

const Container = styled.div`
`