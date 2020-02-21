import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const CardContainer = () => {
    const[data, setData] = useState([])
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(Response => 
            setData(Response.data.results));
                console.log(Response)
    }, []);
    return(
        <div>
       {data.map((char, index) => (
            <CharacterCard
            name = {char.name} 
            />
            ))}
        </div>
    );
};

export default CardContainer