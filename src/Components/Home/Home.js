import React from "react";
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import { useParams } from "react-router";

export default function Home(){
const {id} = useParams()

    return (
        <div className="home">
            <NavBar/>
            <Cards/>
        </div>
    )
}