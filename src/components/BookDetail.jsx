import React from 'react'
import { useParams } from 'react-router-dom'
import allBooks from '../books/allBooks.json';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default function BookDetail() {

    const { asin } = useParams();
    const book = allBooks.find( b => b.asin === asin); // {} || undefined
    
    console.log(book.img)
  return (
    <Row>
        <Col md={8}>
            <Row>
                <Col md={5}>
                    <Card style={{ width: "20rem"}}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Book Details</h1>
                    <ListGroup>
                        <ListGroup.Item><span className='fw-bold'>Title:</span> {book.title} </ListGroup.Item>
                        <ListGroup.Item><span className='fw-bold'>Category:</span> {book.category} </ListGroup.Item>
                        <ListGroup.Item><span className='fw-bold'>Price:</span> € {book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
        <Col md={4}>
            <CommentArea asin={asin}  />
        </Col>
    </Row>
  )
}