import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BsFillCloudsFill, BsFillCloudRainHeavyFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MeteoList = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.currentCoord.content);
  const meteoWeek = useSelector((state) => state.meteoContainer.content);
  //   const currentMeteo = useSelector((state) => state.currentMeto.content);

  const converterC = (elem) => {
    return (parseInt(elem) - 273.15).toFixed(1);
  };

  const convertDt = (elem) => {
    return new Date(elem * 1000).toLocaleString("it-IT");
  };

  const fetchMeteoData = async (event) => {
    try {
      if (coordinates) {
        const meteoURl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=4464f2e1cd5047a5c458e66b7ae44113`;
        const curentMeteoURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=4464f2e1cd5047a5c458e66b7ae44113`;

        const response1 = await fetch(meteoURl);

        const meteoDataArray = await response1.json();

        const response = await fetch(curentMeteoURL);

        const meteoData = await response.json();

        dispatch({ type: "SET_METEO_CONTAINER", payload: meteoDataArray });
        dispatch({ type: "SET_CURRENT_METEO", payload: meteoData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeteoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <>
      <Col xs={12} className='d-flex flex-column '>
        {meteoWeek.list &&
          meteoWeek.list.map((meteo, i) => (
            <Link to={`/meteoDetails/${meteoWeek.city.coord.lat}/${meteoWeek.city.coord.lat}`}>
              <Card className='d-flex flex-row align-items-center px-2 my-1'>
                {meteo.weather[0].main === "Clouds" ? (
                  <BsFillCloudsFill />
                ) : meteo.weather[0].main === "Rain" ? (
                  <BsFillCloudRainHeavyFill />
                ) : (
                  <BsSunFill />
                )}
                <Card.Body>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <p className='fs-3'>{meteo.weather[0].main}</p>
                      <p className='display-6'>{meteo.weather[0].description}</p>
                    </div>
                    <div>
                      <p>{convertDt(meteo.dt)}</p>
                      <h3 className='display-3'>{converterC(meteo.main.temp)}°</h3>
                    </div>
                  </div>
                  Wind: {meteo.wind.speed}Km/h Humidty:{meteo.main.humidity}%
                </Card.Body>
              </Card>
            </Link>
          ))}
      </Col>
    </>
  );
};

export default MeteoList;
