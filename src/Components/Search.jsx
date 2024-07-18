/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Search } from '@mui/icons-material';
import './Search.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/reducer';

const SearchBar = ({hideButtons = false}) => {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("Click google search button>>>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search', { state: { query: input } });
  };

  return (
    <form className="search-form">
        <div className="search-form__input">
            <Search />
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='Search Google or type a URL'
            />
            <Mic />
        </div>
        {!hideButtons ? (
          <div className="search-form__buttons">
            <button
              type="submit"
              onClick={search}
              >Google Search</button>{' '}
            <button>I'm Feeling Lucky</button>
          </div>
        ) : (
          <div className="search-form__buttons">
            <button
              className="search_buttonsHidden"
              type="submit"
              onClick={search}
              >Google Search</button>{' '}
            <button
              className="search_buttonsHidden"
            >I'm Feeling Lucky</button>
          </div>
        )}
    </form>
  )
}

export default SearchBar;