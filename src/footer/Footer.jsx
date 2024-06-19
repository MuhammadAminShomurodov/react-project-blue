import "../footer/Footer.scss";

function Footer() {
  return (
    <div className="container">
      <div className="Footer">
        <div className="footer-top">
          <div className="word">
            <div className="word1">
              <h3>Quality cleaning for your home</h3>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className="kub">
                <div className="kubs"></div>
                <div className="kubs"></div>
                <div className="kubs"></div>
                <div className="kubs"></div>
                <div className="kubs"></div>
              </div>
            </div>
            <div className="word2">
              <h4>Contact us</h4>
              <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              <a href="#">(414) 567 - 2109</a>
              <h6> contact@cleaning.com</h6>
            </div>
            <div className="word3">
              <h4>Hours</h4>
              <div className="number">
                <a href="#">Monday to Friday</a>
                <p>6:00 AM - 9:00 PM</p>
              </div>
              <div className="number2">
                <a href="#">Saturday & Sunday</a>
                <p>8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="word4">
              <h3>Get a free estimate</h3>
              <h2>(414) 567 - 2109</h2>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button>Request a free quote</button>
            </div>
          </div>
          <div className="logo">
            <img src="./src/assets/images/logo.svg" alt="" />
            <p>
              Copyright © Cleaning X | Designed by BRIX Templates - Powered by
              Webflow - Licenses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
