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
import Home from './pages/Home';

function App() {

  let [type, setType] = useState("fantasy")
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState('light');
  let [authUser, setAuthUser] = useState('Mattia Petruzzi');

  let generi = { fantasy, history, horror, romance, scifi }
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <AuthContext.Provider value={[authUser]}>
          <BrowserRouter>

            <MyNav search={search} handleSearch={handleSearch} />
            <Container className='my-3'>

              <Routes>
                <Route index element={<Home books={generi} type={type} search={search} setType={setType} searchQuery={search} />} />
                <Route path='/details/:asin' element={<BookDetail />} />
                <Route path='*' element={<NotFound />} />
              </Routes>

            </Container>
            <MyFooter />
          </BrowserRouter>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
