import { Card, Col } from "react-bootstrap";
import { BsCloudFog2, BsDroplet } from "react-icons/bs";
import { Link } from "react-router-dom";

const MeteoCardMini = (props) => {
  const convertDt = (elem) => {
    return new Date(elem * 1000).toUTCString();
  };

  return (
    <Col>
      <Link to={`/meteoDetails/${props.meteoWeek.city.coord.lat}/${props.meteoWeek.city.coord.lon}`}>
        <Card className='d-flex flex-row align-items-center px-2 my-1 rounded-5'>
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <p className='fs-3'>{props.meteo.weather[0].main}</p>
                <p className='display-6'>{props.meteo.weather[0].description}</p>
              </div>
              <div>
                <p>{convertDt(props.meteo.dt)}</p>
                <h3 className='display-3'>{props.meteo.main.temp}°c</h3>
              </div>
            </div>
            <BsCloudFog2 className='m-1' />
            {props.meteo.wind.speed}Km/h <BsDroplet className='m-1' />
            {props.meteo.main.humidity}%
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MeteoCardMini;
