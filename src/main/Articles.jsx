import { Component } from "react";
import "../main/Articles.scss";
import plesos from "../assets/images/plesos.png";
import ishchi from "../assets/images/ishchi.png";

class Articles extends Component {
  render() {
    return (
      <div className="Articles">
        <div className="container">
          <div className="articles-btn">
            <h2>Articles & resources</h2>
            <button>Get a free quote</button>
            <button>Browse articles</button>
          </div>
          <div className="cards-img">
            <img src={plesos} alt="" />
            <img src={ishchi} alt="" />
          </div>
          <div className="cards">
            <div className="card">
              <h3>
                8 best vacuum cleaners to clean any <br /> mess for your home in
                2022
              </h3>
              <p className="par1">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="kubs">
                <p className="par2">Jan 28, 2022</p>
                <div className="kub"></div>
              </div>
            </div>
            <div className="card">
              <h3>
                How to properly disinfect your phone and other electronics
              </h3>
              <p className="par1">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="kubs">
                <p className="par2">Feb 1, 2022</p>
                <div className="kub"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Articles;
