import "../header/Header.scss";
import Logo from "../assets/images/Logo.svg";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <img src={Logo} alt="" />
            <div className="links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Articles</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="header-right">
            <p>Cart(0)</p>
            <button>Get a free quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
