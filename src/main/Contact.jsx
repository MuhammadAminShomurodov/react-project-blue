import { Component } from "react";
import "../main/Contact.scss";
import tel from "../assets/images/tel-2.svg";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div className="contact-all">
            <div className="contact-left">
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="tel">
                <img src={tel} alt="" />
                <div className="tel2">
                  <p>Call us now</p>
                  <a href="#">(414) 567 - 2109</a>
                </div>
              </div>
              <div className="line"></div>
              <div className="contact-left-bottom">
                <h3>Not convinced yet?</h3>
                <p>
                  Massa bibendum consectetur maurisid gravida purus, dolor dui
                  amet morbi non nunc urna purus diam.
                </p>
                <button>Browse our packages</button>
              </div>
            </div>
            <div className="contact-right">
              <div className="input-all">
                <div className="input-left">
                  <p>Full name</p>
                  <input type="text" />
                  <p>Address</p>
                  <input type="text" />
                  <p>Requested service</p>
                  <input type="text" />
                </div>
                <div className="input-right">
                  <p>Phone number</p>
                  <input type="tel" />
                  <p>Email</p>
                  <input type="email" />
                  <p>Day of service</p>
                  <input type="data" />
                </div>
              </div>
              <div className="input-bottom">
                <p>Add a note</p>
                <input type="text" />
                <div className="input-btn">
                  <button>Submit message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
