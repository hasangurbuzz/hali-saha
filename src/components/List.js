import React from 'react';
import styled from "styled-components";
import Card from "./Card";
const List = ({data}) => {


    return (
        <HalisahaWrapper>
            <UnorderedList>
                {data.map((element) =>
                    <ListElement key={element.id}> <Element> <Card image={element.image} description={element.name}/> </Element>
                    </ListElement>
                )}

            </UnorderedList>
        </HalisahaWrapper>

    );
};

export default List;


const HalisahaWrapper = styled.div`
  width: 600px;
`

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const ListElement = styled.li`
  float: left;
  margin-bottom: 10px;
`

const Element = styled.div`
  width: 200px;
`
const ElementName = styled.p`
  text-transform: capitalize;
`
