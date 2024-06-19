import "../main/Service.scss";
import house from "../assets/images/house.png";
import office from "../assets/images/office.png";
import industrial from "../assets/images/industrial.png";
import bg from "../assets/images/service-bg.png";
import tel2 from "../assets/images/tel-2.svg";

import { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="Service">
        <div className="container">
          <div className="service-text">
            <h2>Our Services</h2>
            <button>Explore services</button>
          </div>
          <div className="cards">
            <div className="card1">
              <img src={house} alt="" />
              <h3>House cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card2">
              <img src={office} alt="" />
              <h3>Office cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card3">
              <img src={industrial} alt="" />
              <h3>Industrial cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className="service-bg">
            <div className="left">
              <img src={bg} alt="" />
            </div>
            <div className="right">
              <p className="par1">Covid-19 sanitization</p>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <div className="par2">
                <p>
                  Lobortis mattis odio leo eget mauris met aliquet <br /> semper
                  molestie sollicitudin congue massa <br /> mauris lectus.
                </p>
                <div className="btns">
                  <button>Get a free quote</button>
                  <div className="tel">
                    <img src={tel2} alt="" />
                    <div className="tel2">
                      <p>Call us now</p>
                      <a href="#">(414) 567 - 2109</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}
export default Service;
