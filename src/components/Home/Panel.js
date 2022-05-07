import React, {useState} from 'react';
import styled from "styled-components";
import Confirmation from "./Confirmation";


const Panel = ({panelStatusHandler, chosenElement, user, onConfirmationHandler}) => {


    const {image, address, tel, chosenDates} = chosenElement


    const [confirmationStatus, setConfirmationStatus] = useState(false)

    const confirmationPanelHandler = () => {
        setConfirmationStatus(!confirmationStatus)
    }

    return (
        <Container>

            <>
                <ItemWrapper>
                    <ImageWrapper>
                        <CloseButton onClick={panelStatusHandler}>&lArr;</CloseButton>
                        <Image bgImage={image}/>
                    </ImageWrapper>
                    <InfoWrapper>
                        <Info>Adres: {address}</Info>
                        <Info>Tel: {tel}</Info>
                    </InfoWrapper>
                </ItemWrapper>
                <button onClick={confirmationPanelHandler}>{confirmationStatus ? 'Kapat' : 'Zaman Seç'}</button>
            </>

            {confirmationStatus && <Confirmation chosenDates={chosenDates} user={user}
                                                 confPanelHandler={confirmationPanelHandler}
                                                 onConfirmationHandler={onConfirmationHandler}/>}


        </Container>
    );
};

export default Panel;

const Container = styled.div`
  display: flex;
  flex-direction: column;


`


const Image = styled.div`
  background-image: ${props => {
    const {bgImage} = props;
    return `url("/images/${bgImage}")`;
  }};
  width: 45vw;
  height: 60vh;
  min-height: 10vw;
  min-width: 10vw;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`

const InfoWrapper = styled.div`
  background: darkgreen;
  border-radius: 5px;
  margin: 0 0 0 20px;
  padding: 10px;

`

const Info = styled.p`
  font-size: 10px;
  color: white;
`

const CloseButton = styled.button`
  position: fixed;
  left: 20px;
  top:50%;
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
 
  //animation-duration: 5s;
  //animation-name: slidein;
  animation: 5s slidein;
    
  
  @keyframes slidein {
    from {
      margin-left: 20%;
    }
    to {
      margin-left: 0;
      
    }
  }
  @keyframes slideout {
    from {
      margin-left: 0;
    }
    to {
      margin-left: 20%;
    }

    
  }
`

const ImageWrapper = styled.div`
  display: flex;
`

const ItemWrapper = styled.div`
  display: flex;
`


