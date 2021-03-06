import React from 'react';
import Card from "../UI/Card";
import './List.css'

const List = (props) => {

    const { listData, searchInput, chosenElementHandler } = props

    const filteredListData = listData.filter((element) => {
        //if there is not any input the return the original
        if (searchInput === '' || searchInput === undefined) {
            return element;
        }
        //return the item which contains the user input
        else {
            return element.name.toLowerCase().includes(searchInput)
        }
    })




    return (
        <div className={'list-container'}>
            <ul className={'list-ul'}>
                {filteredListData &&
                    filteredListData.map((element) =>
                        <li className={'list-li'} key={element.id}>
                            <div className={'list-element'}
                                onClick={() => {
                                    chosenElementHandler(element)
                                    
                                }}>
                                <Card image={element.image} description={element.name} />
                            </div>
                        </li>
                    )}

            </ul>
            {filteredListData.length < 1 &&
                <h1 className={'list-not-found'}>bulunamad─▒</h1>}
        </div>

    );
};

export default List;

