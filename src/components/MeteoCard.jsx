import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsCloudFog2, BsDroplet } from "react-icons/bs";
import brokenCloud from "../assets/scattered-clouds.png";
// import { useSelector } from "react-redux";

const MeteoCard = () => {
  const currentMeteo = useSelector((state) => state.currentMeteo.content);

  const kelvinConverter = (temperature) => {
    return (parseInt(temperature) - 273.15).toFixed(0) + "°";
  };

  return (
    currentMeteo && (
      <Card className='my-1 rounded-5 align-items-center'>
        {/* <div className='d-flex justify-content-between px-4 '>
          <h2 className='display-2'>{temperature + "°"}</h2>
          <div>
            {currentMeteo.weather[0].main === "clouds" ? <BsFillCloudFill /> : <BsFillSunFill />}

            <h4>{currentMeteo.weather[0].main}</h4>
            <p>{currentMeteo.weather[0].description}</p>
          </div>
        </div> */}
        <h3 className='ms-auto p-3'>{currentMeteo.name}</h3>
        <Card.Img src={brokenCloud} />

        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title>
            <h4>{currentMeteo.weather[0].description}</h4>
          </Card.Title>

          <h2>{kelvinConverter(currentMeteo.main.temp)}</h2>
          <p>Real feels {kelvinConverter(currentMeteo.main.feels_like)}</p>
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
