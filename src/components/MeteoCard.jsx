import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  BsFillCloudFill,
  BsFillSunFill,
  BsCloudHaze2Fill,
  BsFillCloudHailFill,
  BsFillCloudSunFill,
} from "react-icons/bs";
// import { useSelector } from "react-redux";

const MeteoCard = () => {
  const currentMeteo = useSelector((state) => state.currentMeteo.content);
  let temperature;
  if (currentMeteo) {
    temperature = (parseInt(currentMeteo.main.temp) - 273.15).toFixed(1);
  }

  return (
    currentMeteo && (
      <Card className='m-1 bg-transparent w-100 '>
        <Card.Title>
          <h1 className='display-1'>Today</h1>
        </Card.Title>
        <div className='d-flex justify-content-between px-4 '>
          <h2 className='display-2'>{temperature + "°"}</h2>
          <div>
            {currentMeteo.weather[0].main === "clouds" ? <BsFillCloudFill /> : <BsFillSunFill />}

            <h4>{currentMeteo.weather[0].main}</h4>
            <p>{currentMeteo.weather[0].description}</p>
          </div>
        </div>

        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <BsCloudHaze2Fill />
              {currentMeteo.wind.speed}Km/h
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <BsFillCloudHailFill />
              {currentMeteo.main.humidity}%
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <BsFillCloudSunFill />
              {currentMeteo.clouds.all}%
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default MeteoCard;
