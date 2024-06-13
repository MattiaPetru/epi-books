import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'


export default function AllTheBooks({books, search}) {


  const  [selected, setSelected] = useState(false);
    
  return (

    <Row>
      <Col md={12}>
     
        <Row> {books
              .filter(book => book.title.toLowerCase().includes(search))
              .map(book => <SingleBook 
                   key={book.asin} 
                   book={book}
                   selected = {selected}
                   setSelected = {setSelected}
               />)} 
        </Row>
      </Col>
    </Row>
  )
}