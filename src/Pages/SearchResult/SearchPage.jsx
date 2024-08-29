import { Description, Image, LocalOffer, Map, MoreVert, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './SearchPage.css';
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import { useStateValue } from "../../StateProvider/StateProvider.jsx";
import useGoogleSearch from "../../api/useGoogleSearch.js";
import response from "../../dummy data/response.js";

const SearchPage = () => {

  const [{term}, dispatch] = useStateValue();

  // const { data } = useGoogleSearch(term);

  const data = response;

  return (
    <>
      <header className="search-page__header">
        <section className="search-page__header-top">
          <div className="search-page__header-top-left">
            <Link to="/">
              <img
                className="search-page__header-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                alt="" />
            </Link>
          </div>
          <div className="search-page__header-top-right">
            <SearchBar hideButtons/>
          </div>
        </section>
        <section className="search-page__header-search-field">
          <div className="search-option" role="navigation">
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
      <hr />
      <main>
        {term && (
          <ul className="search-page__results">
            <p>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

            {data?.items.map(item => (
              <li className="search-page__result" key={item.cacheId}>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a className="search-page__result-link" href={item.link} target="_blank">
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search-page__result-image"
                      src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                  {item.displayLink} ✔️
                </a>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a className="search-page__result-title" href={item.link} target="_blank">
                  <h2>{item.title}</h2>
                </a>
                <p className="search-page__result-snippet">
                  {item.snippet}
                </p>
                <hr/>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default SearchPage;