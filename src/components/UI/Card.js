import React from 'react';
import styled from "styled-components";

const Card = ({image, description}) => {
    return (
        <Container>
            <Image bgImage={image}/>
            <Description>{description}</Description>

        </Container>
    );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 20vw;
  background: white;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 1px -1px 1px 2px;
  cursor: pointer;
  
  :hover {
    transform: scale(1.2);
    transition: all ease-in-out 0.15s;
    box-shadow: 1px 1px 10px 2px;

  }



`

const Image = styled.div`
  background-image: ${props => `url("/images/${props.bgImage}")`};
  width: 20vw;
  height: 25vh;
  min-height: 10vw;
  min-width: 10vw;
  max-height: 20vw;
  background-position: center;
  background-size: cover;
  border-radius: 10px;

`
const Description = styled.p`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;







`