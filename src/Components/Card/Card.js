import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";
import ListGroupItem  from "react-bootstrap/ListGroupItem";
import perrito from '../../Img/Perrito.jpeg'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function card({img,title, description,year, id}){
    return (
        <Card style={{ width: '18rem', height: '30rem', margin: '15px'}}>
            <Card.Img  variant="top" src={img || perrito} style={{height: '15rem'}} />
            <Card.Body style={{height: '5rem'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Released: {year}</ListGroupItem>
            </ListGroup>
            <Button href={'/detail/' + id}>Detail</Button>
        </Card>
    )
}