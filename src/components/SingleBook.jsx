import React, { useContext,useState } from 'react';
import { Button,Card, Col} from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useNavigate } from "react-router-dom";


export default function SingleBook({book, selected, setSelected}) {

  let [themeCtx, setThemeCtx] = useContext(ThemeContext);
  let navigate = useNavigate();

  return (
    <Col>
      <Card data-testid="libro-card" bg={themeCtx} data-bs-theme={themeCtx} className= "my-2"style={{ width: "18rem", border: selected === book.asin ? '2px solid red' : 'none' }} 
      onClick={() => setSelected(book.asin)}>
        <Card.Img variant="top" style={{height: "400px"}} src={book.img} />
        <Card.Body>
          <Card.Title style={{height: "72px"}}>{book.title}</Card.Title>
          <Button 
            className="btn btn-dark w-100 my-2"
            onClick={() => navigate('/details/'+ book.asin)}
          >Book Details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
