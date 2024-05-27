import { Button, Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from "./books/fantasy.json"
import history from "./books/history.json"
import horror from "./books/horror.json"
import romance from "./books/romance.json"
import scifi from "./books/scifi.json"
import { useState } from 'react';

function App() {

  let [type, setType] = useState("fantasy")

  return (
    <>
      <MyNav />
      <Container className='my-3'>
        <Welcome />
        <Button variant="secondary" onClick={() => setType("fantasy")}>Fantasy</Button>
        <Button variant="secondary" onClick={() => setType("history")}>History</Button>
        <Button variant="secondary" onClick={() => setType("horror")}>Horror</Button>
        <Button variant="secondary" onClick={() => setType("romance")}>Romance</Button>
        <Button variant="secondary" onClick={() => setType("scifi")}>Scifi</Button>

        {type === "fantasy" && <AllTheBooks books={fantasy} />}
        {type === "history" && <AllTheBooks books={history} />}
        {type === "horror" && <AllTheBooks books={horror} />}
        {type === "romance" && <AllTheBooks books={romance} />}
        {type === "scifi" && <AllTheBooks books={scifi} />}

      </Container>
      <MyFooter />
    </>
  );
}

export default App;
