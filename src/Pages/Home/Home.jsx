import SearchBar from '../../Components/SearchBar/SearchBar';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import Footer from '../../Components/Footer/Footer';

const Home = () => {

  return (
    <>
      <Navbar />
      <main className='home-main'>
          <div className='home-main__img'>
            <div className='spacebar'></div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="Google logo image"
            />
          </div>
          <SearchBar />
          <div className="languages">
            Google offered in: <a href="#">हिन्दी</a> <a href="#">বাংলা</a> <a href="#">తెలుగు</a> <a href="#">मराठी</a>
            <a href="#">தமிழ்</a> <a href="#">ગુજરાતી</a> <a href="#">ಕನ್ನಡ</a> <a href="#">മലയാളം</a> <a href="#">ਪੰਜਾਬੀ</a>
          </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;