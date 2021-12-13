import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router";
import './Result.css'
import cargando from '../../Img/cargando.gif'

export default function Result(){
    var resultado = useSelector(state => state.searchResult)
    const [state, setState] = React.useState([])

    React.useEffect(()=>{
        setState(resultado.results)
    })

    let {pag} = useParams()
    if(resultado.results) var paginas = Math.floor(resultado.results.length/4); 
    const navigate = useNavigate(); 
    var min = parseInt(pag); 
    var max = parseInt(pag) + 4; 
    console.log(min,max)
    
    function paginado (){
        let Paginado = [];
        for(let ii = 0; ii<=paginas; ii++){
            Paginado.push(<Button onClick={event=>{event.preventDefault();return navigate('/result/' + ii*4)}}>{ii}</Button>)
        }
        return Paginado
    }

    return (
        <div>
            <NavBar/>
            {state? <Cards contenido = {state.slice(min,max)}/>: <img className='cargando' src={cargando}/>}
            <div className='paginado'>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    {paginado()}
                </ButtonGroup>
            </ButtonToolbar>
            </div>
        </div>
    )
}