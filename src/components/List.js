import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const List = ({listData, searchInput, chosenElementHandler, panelStatusHandler}) => {

    const filteredListData = listData.filter((element) => {
        //if no input the return the original
        if (searchInput === '') {
            return element;
        }
        //return the item which contains the user input
        else {
            return element.name.toLowerCase().includes(searchInput)
        }
    })


    return (
        <HalisahaWrapper>
            <UnorderedList>
                {filteredListData && filteredListData.map((element) =>
                    <ListElement key={element.id}>
                        <Element onClick={() => {
                            chosenElementHandler(element)
                            panelStatusHandler()
                        }}>
                            <Card image={element.image} description={element.name}/>
                        </Element>
                    </ListElement>
                )}

            </UnorderedList>
            {filteredListData.length < 1 && <h1>bulunamadı</h1>}
        </HalisahaWrapper>

    );
};

export default List;


const HalisahaWrapper = styled.div`

  text-align: center;
  width: 100%;


`

const UnorderedList = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 72%;
  margin: auto;


`

const ListElement = styled.li`
  float: left;
  padding: 2px 5px;
`

const Element = styled.div`

  margin: 10px;

`

