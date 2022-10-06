import "./home.css";
import cloud from "./images/background.jpg";
import Data from "./weather.json";
import { BsFillCloudSunFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap } from "react-icons/gi";
import { RiArrowUpDownFill } from "react-icons/ri";
import cloudy from "./images/blackcloud.png";
import rain from "./images/raincloud.png";
import moon from "./images/moon.png";
import partly from "./images/partly-cloudy.png";
import showers from "./images/showers.png";
import sunrise from "./images/sunrise.png";
import { MdVisibility } from "react-icons/md";
import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

  function Home() {
  const [show, setShow] = useState(true);
  console.log(Data.query.results.channel.item.forecast[0].code);
  return (
    <div
      className="App2"
      style={{
        backgroundImage: `url(${cloud})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container5">
        <h3>Weather App</h3>
        {}
      </div>
      <div className="homecontainer">
        <div className="sidecontainer-1">
          <div className="city-container">
            <h3>
              {Data.query.results.channel.location.city} {"\u00A0"}{" "}
              <BsFillCloudSunFill color="#46B2E0" fontSize="1.5em" />
            </h3>
            <div className="weather">
              <h1>{Data.query.results.channel.item.forecast[0].code}°</h1>
              <p>{Data.query.results.channel.item.forecast[0].day}</p>
              <p>
                ↑ {Data.query.results.channel.item.forecast[0].high} {"\u00A0"}{" "}
                ↓{Data.query.results.channel.item.forecast[0].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[0].text}</p>
            </div>
            <div className="main">
              <img className="moon" src={moon} alt="moon" />
            </div>
          </div>
        </div>

        <div className="side-container">
          <h3>Weather Report of {Data.query.results.channel.location.city}</h3>
          <p>{Data.query.results.channel.description}</p>
          <p>Date: {Data.query.results.channel.lastBuildDate}</p>
          <p>City: {Data.query.results.channel.location.city}</p>
          <p>Country: {Data.query.results.channel.location.country}</p>
          <p>Region: {Data.query.results.channel.location.region}</p>
          <div className="details"></div>
        </div>
      </div>
      <div className="details">
        {}
        <div className="spl">
          <div className="table">
            <a>
              <img src={partly} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[1].date}</p>
              <p>{Data.query.results.channel.item.forecast[1].code}°</p>
              <p>{Data.query.results.channel.item.forecast[1].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[1].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[1].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[1].text}</p>
            </a>

            <a>
              <img src={cloudy} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[2].date}</p>
              <p>{Data.query.results.channel.item.forecast[2].code}°</p>
              <p>{Data.query.results.channel.item.forecast[2].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[2].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[2].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[2].text}</p>
            </a>
            <a>
              <img src={cloudy} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[3].date}</p>
              <p>{Data.query.results.channel.item.forecast[3].code}°</p>
              <p>{Data.query.results.channel.item.forecast[3].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[3].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[3].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[3].text}</p>
            </a>
            <a>
              <img src={partly} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[4].date}</p>
              <p>{Data.query.results.channel.item.forecast[4].code}°</p>
              <p>{Data.query.results.channel.item.forecast[4].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[4].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[4].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[4].text}</p>
            </a>
            <a>
              <img src={partly} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[5].date}</p>
              <p>{Data.query.results.channel.item.forecast[5].code}°</p>
              <p>{Data.query.results.channel.item.forecast[5].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[5].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[5].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[5].text}</p>
            </a>
            <a>
              <img src={rain} width="150px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[6].date}</p>
              <p>{Data.query.results.channel.item.forecast[6].code}°</p>
              <p>{Data.query.results.channel.item.forecast[6].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[6].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[6].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[6].text}</p>
            </a>
            <a>
              <img src={rain} width="150px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[7].date}</p>
              <p>{Data.query.results.channel.item.forecast[7].code}°</p>
              <p>{Data.query.results.channel.item.forecast[7].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[7].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[7].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[7].text}</p>
            </a>
            <a>
              <img src={cloudy} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[8].date}</p>
              <p>{Data.query.results.channel.item.forecast[8].code}°</p>
              <p>{Data.query.results.channel.item.forecast[8].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[8].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[8].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[8].text}</p>
            </a>
            <a>
              <img src={showers} width="100px" alt="cloud" />
              <p>{Data.query.results.channel.item.forecast[9].date}</p>
              <p>{Data.query.results.channel.item.forecast[9].code}°</p>
              <p>{Data.query.results.channel.item.forecast[9].day}</p>
              <p>
                ↑{Data.query.results.channel.item.forecast[9].high} {"\u00A0"} ↓
                {Data.query.results.channel.item.forecast[9].low}{" "}
              </p>
              <p>{Data.query.results.channel.item.forecast[9].text}</p>
            </a>
          </div>
          <div className="info">
            <button onClick={() => setShow(!show)}>
              {show ? "hide element below" : "show element below"}
            </button>
            {show && (
              <div className="info-detail">
                <h2>Weather Today in {Data.query.results.channel.title} </h2>
                <br></br>
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <h2>
                          {Data.query.results.channel.item.forecast[0].code}°
                        </h2>
                        Feels Like
                      </th>
                      <th>
                        <img src={sunrise} alt="sunrise" width="100px" />
                        <p>
                          ↑ {Data.query.results.channel.astronomy.sunrise} ↓
                          {Data.query.results.channel.astronomy.sunset}
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td>Wind Speed</td>
                      <td>
                        <GiWindSlap /> {Data.query.results.channel.wind.speed}
                      </td>
                      
                    </tr>
                    <tr>
                      <td>Humidity</td>
                      <td>
                        <WiHumidity />{" "}
                        {Data.query.results.channel.atmosphere.humidity}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Pressure</td>
                      <td>
                        <RiArrowUpDownFill />{" "}
                        {Data.query.results.channel.atmosphere.pressure}
                      </td>
                    </tr>
                    <tr>
                      <td>Visibility</td>
                      <td>
                        <MdVisibility />{" "}
                        {Data.query.results.channel.atmosphere.visibility}
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;