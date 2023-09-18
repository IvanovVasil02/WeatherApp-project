import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MeteoCardMini from "./MeteoCardMini";
import { BsArrowLeft } from "react-icons/bs";

// import MeteoList from "./MeteoList";
// import MeteoCard from "./MeteoCard";

const MeteoDetails = () => {
  let { lat, lon } = useParams();
  const dispatch = useDispatch();
  const selectedMeteo = useSelector((state) => state.meteoContainer.content);

  const fetchMeteo = async () => {
    try {
      const meteoURl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4464f2e1cd5047a5c458e66b7ae44113&units=metric`;

      const response1 = await fetch(meteoURl);

      const meteoDataArray = await response1.json();
      dispatch({ type: "SET_METEO_CONTAINER", payload: meteoDataArray });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeteo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <Container fluid>
      <Row className='d-flex justify-content-center mt-3 gy-3'>
        {selectedMeteo.list && (
          <Col xs={12} lg={8} className='d-flex flex-column'>
            <h2 className='display-3'>24 hour weather forecast for {selectedMeteo.city.name}</h2>
            <Link to='/' className='fs-5 text-black ms-auto'>
              <BsArrowLeft />
              Go back
            </Link>
            {selectedMeteo.list.map((meteo, i) => (
              <MeteoCardMini meteo={meteo} meteoWeek={selectedMeteo} key={"meteo" + i} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default MeteoDetails;
