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
import { ThemeContext, AuthContext } from './modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';

function App() {

  let [type, setType] = useState("fantasy")
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState('light');
  let [authUser, setAuthUser] = useState('Mattia Petruzzi');

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <AuthContext.Provider value={[authUser]}>
          <BrowserRouter>

            <MyNav search={search} handleSearch={handleSearch} />
            <Container className='my-3'>
              <Welcome />
              <Routes>
                <Route index element={<AllTheBooks books={fantasy} searchQuery={search} />} />
                <Route path='/details/:asin' element={<BookDetail />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              {/*
              <Button variant="secondary" className='m-1' onClick={() => setType("fantasy")}>Fantasy</Button>
              <Button variant="secondary" className='m-1' onClick={() => setType("history")}>History</Button>
              <Button variant="secondary" className='m-1' onClick={() => setType("horror")}>Horror</Button>
              <Button variant="secondary" className='m-1' onClick={() => setType("romance")}>Romance</Button>
              <Button variant="secondary" className='m-1' onClick={() => setType("scifi")}>Scifi</Button>

              {type === "fantasy" && <AllTheBooks books={fantasy} />}
              {type === "history" && <AllTheBooks books={history} />}
              {type === "horror" && <AllTheBooks books={horror} />}
              {type === "romance" && <AllTheBooks books={romance} />}
              {type === "scifi" && <AllTheBooks books={scifi} />}*/}


            </Container>
            <MyFooter />
          </BrowserRouter>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
