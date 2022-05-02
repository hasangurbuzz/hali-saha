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
`

const Image = styled.div`
  background-image: ${props => `url("/images/${props.bgImage}")`};
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;

`
const Description = styled.p`
  color: green;
  text-transform: capitalize;
`