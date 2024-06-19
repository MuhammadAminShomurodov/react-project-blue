import "../main/Quality.scss";
import tel from "../assets/images/tel.svg";
import { Component } from "react";
import quality from "../assets/images/quality.png";

class Quality extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="quality-all">
            <div className="quality-left">
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="btn-all">
                <div className="btn">
                  <button>Get a free quote</button>
                </div>
                <div className="tel">
                  <img src={tel} alt="" />
                </div>
                <div className="tel2">
                  <p>Call us now</p>
                  <a href="tel">(414) 567 - 2109</a>
                </div>
              </div>
            </div>
            <div className="quality-right">
              <img src={quality} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
