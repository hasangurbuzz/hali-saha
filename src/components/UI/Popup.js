import React from 'react';
import styled from "styled-components";

const Popup = ({popupStateHandler, info, show}) => {

    return (
        <Container show={show}>
            <Cover>
                <PopupInfo>{info}</PopupInfo>
                <PopupClose onClick={popupStateHandler}>&times;</PopupClose>
            </Cover>
        </Container>
    );
};

export default Popup;

const Container = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: ${props => {
    const {show} = props;
    return show ? 'visible' : 'hidden';
  }};
  opacity: ${props => {
    const {show} = props;
    return show ? '1' : '0';
  }};
  z-index: 100;


`
const Cover = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`


const PopupInfo = styled.p`
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;

`

const PopupClose = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  background: transparent;
  border: none;
  cursor: pointer;
`

