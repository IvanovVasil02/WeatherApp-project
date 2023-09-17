import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const MeteoForm = () => {
  const dispatch = useDispatch();

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
    </>
  );
};

export default MeteoForm;
