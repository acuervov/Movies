import React from "react";
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import { findMovie } from "../../Redux/Actions";
import { useNavigate } from "react-router";

export default function SearchBar(){
  
  const [search, setSearch] = React.useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(){
    console.log(search)
    dispatch(findMovie(search))
    if(search !== "")navigate("/result/0")
    setSearch("")

  }

    return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value = {search}
          onChange={event => setSearch(event.target.value)}
        />
        <Button variant="light" onClick={handleSubmit}>Search</Button>
      </Form>
    )
}