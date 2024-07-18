import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/search" element={ <SearchPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
