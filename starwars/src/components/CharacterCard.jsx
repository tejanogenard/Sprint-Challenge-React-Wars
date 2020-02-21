import React from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap';

const CharacterCard = (props) => {
    return(
   <div class = "character-list">
           <Col xs = '5' md = '5' xl ='5'>
       <Card body outline color="secondary">
        <CardTitle>Name: {props.name} </CardTitle>
        <CardText>Birth Year: {props.birth_year}</CardText>
        <CardText>gender: {props.gender}</CardText>
      </Card>
      </Col>
    </div>
    );
};

export default CharacterCard