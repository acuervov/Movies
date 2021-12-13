import React from "react";
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import cargando from '../../Img/cargando.gif'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { movieList } from "../../Redux/Actions";

export default function Home(){

    var resultado = useSelector(state => state.allMovies)
    const [state, setState] = React.useState([])
    const dispatch = useDispatch(); 

    React.useEffect(()=>{
        dispatch(movieList())
    }, [state])
    React.useEffect(()=>{
       if(resultado) setState(resultado.results)
    }, [state])

    let {pag} = useParams()
    if(state) var paginas = Math.floor(state.length/4); 
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
        <div className="home">
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