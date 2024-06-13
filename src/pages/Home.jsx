import React from 'react'
import Welcome from '../components/Welcome'
import Bottoni from '../components/Bottoni'
import ButtonType from '../components/ButtonType'

export default function Home({type, setType, searchQuery}) {
  return (
    <>
     <Welcome />
     <Bottoni  setType={setType}/>
     <ButtonType type={type}  search={searchQuery}/>
    </>
  )
}
