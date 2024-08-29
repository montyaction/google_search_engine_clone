import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SearchResults from './Pages/SearchResult/SearchPage';
import TopicPage from './Pages/TopicPage/TopicPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/search" element={ <SearchResults />} />
          <Route path="/topics" element={ <TopicPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;