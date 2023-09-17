import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import cloud from "../assets/few-Clouds.png";

const MeteoForm = () => {
  const dispatch = useDispatch();
  const currentCoord = useSelector((state) => state.currentCoord.content);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const search = document.querySelector("form input").value;
    dispatch({ type: "ADD_QUERY", payload: search });

    try {
      const coordURL =
        "http://api.openweathermap.org/geo/1.0/direct?q={" + search + "}&appid=4464f2e1cd5047a5c458e66b7ae44113";

      const response = await fetch(coordURL);

      const coordinates = await response.json();
      dispatch({ type: "ADD_CURRENT_COORD", payload: coordinates });
    } catch (error) {
      console.log(error);
    }
  };

  // mainCoord.map();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control type='search' placeholder='Search for a city' className='py-2 px-3 rounded-5' />
      </Form>

      {!currentCoord && (
        <Col xs={12} className='d-flex justify-content-center flex-column align-items-center text-center'>
          <img variant='top' src={cloud} alt='sun' className='img-fluid w-100' style={{ maxWidth: "400px" }} />
          <h2>Explore global map for wheater updates</h2>
          <p className='text-white'>FInd out the wheater forecast around you so you can prepare yourself</p>
        </Col>
      )}
    </>
  );
};

export default MeteoForm;
