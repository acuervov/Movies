import React from "react";
import Card from '../Card/Card'
import './Cards.css'
import { Row } from "react-bootstrap";

export default function Cards({contenido}){
    return (
        <div id="cards">
            <Row className="g-4">
                {contenido? contenido.map(movie=> <Card img={movie.imageurl} title ={movie.title} description={movie.synopsis} year={movie.released} id={movie.imdbid}/>): <span>Cargando</span>}
            </Row>
        </div>
    )
}