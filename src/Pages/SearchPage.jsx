import { Description, Image, LocalOffer, Map, MoreVert, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './SearchPage.css';
import SearchBar from "../Components/Search";
import { useStateValue } from "../StateProvider/StateProvider";
import useGoogleSearch from "../api/useGoogleSearch";
import response from "../dummy data/response.js";

const SearchPage = () => {

  const [{term}, dispatch] = useStateValue();

  // const { data } = useGoogleSearch(term);

  const data = response;
  console.log(data);

  return (
    <>
      <header>
        <section className="brand-logo">
          <Link to="/">
            <img
              className="searchPage_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="" />
          </Link>
        </section>
        <section className="search-aria">
          <SearchBar hideButtons/>
          <div className="search-option">
            <div className="search-option__left">
              <div className="search-option__left-item">
                <Search />
                <Link to="/all">All</Link>
              </div>
              <div className="search-option__left-item">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="search-option__left-item">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="search-option__left-item">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search-option__left-item">
                <Map />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search-option__left-item">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search-option__right">
              <dev className="search-option__right-item">
                <Link to="/settings">Settings</Link>
              </dev>
              <dev className="search-option__right-item">
                <Link to="/tools">Tools</Link>
              </dev>
            </div>
          </div>
        </section>
      </header>
      <main>
        {term && ('')}
      </main>
    </>
  )
}

export default SearchPage