import React from "react";
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'

export default function SearchBar(){
    return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="light">Search</Button>
      </Form>
    )
}