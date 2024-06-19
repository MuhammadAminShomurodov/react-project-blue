import "./About.scss";
import { Component } from "react";
import calendar from "../assets/images/calendar.svg";
import cards from "../assets/images/cards.svg";
import shover from "../assets/images/shover.svg";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className="about-cards">
              <div className="about-card">
                <img src={calendar} alt="" />
                <h4>1. Schedule online</h4>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="about-card">
                <img src={cards} alt="" />
                <h4>2. Pay online easily</h4>
                <p>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="about-card">
                <img src={shover} alt="" />
                <h4>3. Get your house cleaned</h4>
                <p>
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <div className="btns">
              <button>Get a free quote</button>
              <button>Explore services</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
