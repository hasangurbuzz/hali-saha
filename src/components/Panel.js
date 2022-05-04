import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Panel = ({panelStatusHandler, chosenElement}) => {
    const {name, image, address, tel} = chosenElement


    return (
        <Container>
            <Wrapper>
                <CloseButton onClick={panelStatusHandler}>Geri</CloseButton>


                <Image bgImage={image}/>
            </Wrapper>
            <InfoWrapper>
                <Info>Adres: {address}</Info>
                <Info>Tel: {tel}</Info>
            </InfoWrapper>


        </Container>
    );
};

export default Panel;

const Container = styled.div`
  display: flex;
`


const Image = styled.div`
  background-image: ${props => `url("/images/${props.bgImage}")`};
  width: 45vw;
  height: 60vh;
  min-height: 10vw;
  min-width: 10vw;
  background-position: center;
  background-size: cover;
  border-radius: 5px;

`

const InfoWrapper = styled.div`
  
  margin: 0 0 0 20px;

`

const Info = styled.p`
`

const CloseButton = styled.button`
  position: fixed;
`

const Wrapper = styled.div`
  display: flex;
`

