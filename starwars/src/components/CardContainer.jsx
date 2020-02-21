import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import { Container} from 'reactstrap'

const CardContainer = () => {
    const[data, setData] = useState([])
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(Response => 
            setData(Response.data.results));
                console.log(Response)
    }, [data]);
    return(
        <Container>
       {data.map((char, index) => (
            <CharacterCard
            name = {char.name} 
            birth_year = {char.birth_year}
            gender = {char.gender}
            />
            ))}
        </Container>
    );
};

export default CardContainer