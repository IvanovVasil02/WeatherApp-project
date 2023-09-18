import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const MainlistElement = (lat, lon) => {
  // eslint-disable-next-line no-unused-vars
  const mainCoord = [
    {
      lat: 45.4641943,
      lon: 9.1896346,
    },
    {
      lat: 40.7127281,
      lon: -74.0060152,
    },

    {
      lat: 35.6828387,
      lon: 139.7594549,
    },

    {
      lat: 48.8588897,
      lon: 139.7594549,
    },

    {
      lat: 40.4167047,
      lon: -3.7035825,
    },
  ];
  let meteoContainer;

  const fetchMainData = async (meteoContainer) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4464f2e1cd5047a5c458e66b7ae44113`;

      const response = await fetch(URL);
      const cityMeteo = await response.json();

      meteoContainer = cityMeteo;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMainData(meteoContainer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={5}>
      <Row>
        {mainCoord.map((city, i) => (
          <MainlistElement key={"city" + i} lat={city.lat} lon={city.lon} />
        ))}
      </Row>
    </Col>
  );
};
export default MainlistElement;
