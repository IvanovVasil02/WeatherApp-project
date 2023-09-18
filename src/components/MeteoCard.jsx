import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsCloudFog2, BsDroplet } from "react-icons/bs";
import brokenCloud from "../assets/brokenCloud.png";
import scatteredCloud from "../assets/scatteredClouds.png";
import rain from "../assets/rain.png";
import sun from "../assets/sun.png";
import fewClouds from "../assets/fewClouds.png";
import overcastCloud from "../assets/overcastCloud.png";

// import { useSelector } from "react-redux";

const MeteoCard = () => {
  const currentMeteo = useSelector((state) => state.currentMeteo.content);

  // eslint-disable-next-line no-unused-vars
  const meteoImg = (meteoCondition) => {
    switch (meteoCondition) {
      case "clear sky":
        return sun;
      case "few clouds":
        return fewClouds;
      case "overcast clouds":
        return overcastCloud;
      case "light rain":
        return rain;
      case "rain":
        return rain;
      case "broken clouds":
        return brokenCloud;
      case "scattered clouds":
        return scatteredCloud;

      default:
        return brokenCloud;
    }
  };

  return (
    currentMeteo && (
      <Card className='my-1 rounded-5 align-items-center'>
        <h3 className='ms-auto p-3'>{currentMeteo.name}</h3>
        <Card.Img src={meteoImg(currentMeteo.weather[0].description)} />

        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title>
            <h4>{currentMeteo.weather[0].description}</h4>
          </Card.Title>

          <h2>{currentMeteo.main.temp}°c</h2>
          <p>Real feels {currentMeteo.main.feels_like}°c</p>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <div className='d-flex align-items-center '>
              <BsCloudFog2 className='me-1' />
              {currentMeteo.wind.speed}Km/h
            </div>
            <div className='d-flex align-items-center'>
              <BsDroplet className='me-1' />
              {currentMeteo.main.humidity}%
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default MeteoCard;
