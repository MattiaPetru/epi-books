import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import axios from '../modules/ApiAxios'
import { StarFill } from 'react-bootstrap-icons';

export default function SingleComment({comment,setAdd,add}) {

  const removeComment = (comment) => {
      axios.delete('/comments/' + comment._id)
      .then(response => {
        setAdd(!add);
      })
      .catch(error => console.error(error))
  }

  return (
    <ListGroup.Item>
      {Array.from({length:comment.rate}).map(rate => <StarFill />)}
       {comment.comment}
      <Button variant="outline-danger" className='float-end' onClick={() => removeComment(comment)}>x</Button>  
    </ListGroup.Item>
  )
}