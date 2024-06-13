import React from 'react'
import { Button } from 'react-bootstrap'

export default function Bottoni({setType}) {
  return (
    <>
    <Button variant="secondary" className='m-1' onClick={() => setType("history")}>History</Button>
    <Button variant="secondary" className='m-1' onClick={() => setType("horror")}>Horror</Button>
    <Button variant="secondary" className='m-1' onClick={() => setType("romance")}>Romance</Button>
    <Button variant="secondary" className='m-1' onClick={() => setType("scifi")}>Scifi</Button>
    </>
  
  )
}
