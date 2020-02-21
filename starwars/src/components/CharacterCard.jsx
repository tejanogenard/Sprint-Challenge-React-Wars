import React from 'react'

const CharacterCard = (props) => {
    return(
        <div class = "character-list">
        <h2>Name: {props.name} </h2>
        </div>
    );
};

export default CharacterCard