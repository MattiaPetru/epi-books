import React from 'react'
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import AllTheBooks from './AllTheBooks'

export default function ButtonType({type, search}) {
  return (
    <>
              {type === "fantasy" && <AllTheBooks books={fantasy} search={search} />}
              {type === "history" && <AllTheBooks books={history} search={search}/>}
              {type === "horror" && <AllTheBooks books={horror} search={search}/>}
              {type === "romance" && <AllTheBooks books={romance} search={search}/>}
              {type === "scifi" && <AllTheBooks books={scifi} search={search}/>}
    </>
  )
}
