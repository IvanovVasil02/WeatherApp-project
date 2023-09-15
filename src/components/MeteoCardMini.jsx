import { Card } from "react-bootstrap";
import { BsFillCloudRainHeavyFill, BsFillCloudsFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MeteoCardMini = (props) => {
  const converterC = (elem) => {
    return (parseInt(elem) - 273.15).toFixed(1);
  };

  const convertDt = (elem) => {
    return new Date(elem * 1000).toLocaleString("it-IT");
  };

  return (
    <Link to={`/meteoDetails/${props.meteoWeek.city.coord.lat}/${props.meteoWeek.city.coord.lat}`}>
      <Card className='d-flex flex-row align-items-center px-2 my-1'>
        {props.meteo.weather[0].main === "Clouds" ? (
          <BsFillCloudsFill />
        ) : props.meteo.weather[0].main === "Rain" ? (
          <BsFillCloudRainHeavyFill />
        ) : (
          <BsSunFill />
        )}
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              <p className='fs-3'>{props.meteo.weather[0].main}</p>
              <p className='display-6'>{props.meteo.weather[0].description}</p>
            </div>
            <div>
              <p>{convertDt(props.meteo.dt)}</p>
              <h3 className='display-3'>{converterC(props.meteo.main.temp)}°</h3>
            </div>
          </div>
          Wind: {props.meteo.wind.speed}Km/h Humidty:{props.meteo.main.humidity}%
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MeteoCardMini;
