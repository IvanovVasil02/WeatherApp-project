import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import brokenCloud from "../assets/brokenCloud.png";
import scatteredCloud from "../assets/scatteredClouds.png";
import rain from "../assets/rain.png";
import sun from "../assets/sun.png";
import fewClouds from "../assets/fewClouds.png";
import overcastCloud from "../assets/overcastCloud.png";

const Weekheader = () => {
  const selectedMeteo = useSelector((state) => state.meteoWeek.content);

  const weeksDay = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

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

  const getDayOfWeek = (data) => {
    const date = new Date(data);
    let day = date.getUTCDay();
    day = day === 0 ? 7 : day;
    return weeksDay[day - 1];
  };

  return (
    <>
      {selectedMeteo.list &&
        selectedMeteo.list.map((meteo) => (
          <Card
            className='d-flex justify-content-center align-items-center rounded-5 pt-1'
            key={getDayOfWeek(meteo.dt_txt)}
          >
            <Card.Img variant='top' src={meteoImg(meteo.weather[0].description)} />
            <Card.Body className='d-flex flex-column justify-content-center align-items-center rounded-5 '>
              <Card.Title>{meteo.main.temp}°</Card.Title>
              <h4>{getDayOfWeek(meteo.dt_txt)}</h4>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Weekheader;
