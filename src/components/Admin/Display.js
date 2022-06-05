import { React, useState } from 'react'
import List from '../UI/List';
import SearchBar from '../UI/SearchBar';

function Display(props) {

    const { listOfHaliSaha } = props

    const [inputText, setInputText] = useState('')

    const inputHandler = (input) => {
        setInputText(input);
    };
    const clearSearchHandler = () => {
        setInputText('')
    }
    return (
        <>
            <h1>Eklenen Halı Sahalar</h1>


            <SearchBar
                inputHandler={inputHandler}
                inputText={inputText}
                clearSearchHandler={clearSearchHandler} />


            <List
                listData={listOfHaliSaha}
                searchInput={inputText}
                chosenElementHandler={props.chosenElementHandler}
            />
        </>
    )
}

export default Display