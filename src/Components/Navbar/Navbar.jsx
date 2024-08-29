import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import SearchLabIcon from '@mui/icons-material/Label';
import { Avatar } from '@mui/material';

import './Navbar.css';

const Header = () => {
  return (
    <header className='header' role="navigation">
        <Link className='header__left-link' to='/about'>About</Link>
        <Link className='header__left-link' to='/store'>Store</Link>
        <div className='header__right'>
            <div className='header__right-wrapper'>
              <div className='header__right-nav'>
                <Link className='header__right-nav__link' aria-label='Gmail' to='/gmail' target='_top'>Gmail</Link>
                <Link className='header__right-nav__link' aria-label='Search for Images' to='images' target='_top'>Images</Link>
              </div>
              <div className='header__right-nav'>
                <Link className='header__right-nav__link' to='#' target='_top'>
                  <SearchLabIcon />
                </Link>
                <Link className='header__right-nav__link' to='#' target='_top'>
                  <AppsIcon style={{ fontSize: '18px' }} />
                </Link>
                <Link className='header__right-nav__link' to='#' target='_top'>
                  <Avatar
                    src=''
                    style={{ border: "1px solid green", width: '26px', height: '26px' }}
                  />
                </Link>
              </div>
            </div>
        </div>
      </header>
  );
}

export default Header;