import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <section className="footer__top-section">India</section>
        <section className="footer__bottom-section">
        <div className="footer__bottom-left-section">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
        </div>
        <div className="footer__bottom-right-section">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <div className="inline-block">Settings</div>
        </div>
        </section>
    </footer>
  )
};

export default Footer;
