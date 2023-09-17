import { Col, Container, Row } from "react-bootstrap";
import MeteoForm from "./MeteoForm";
import MeteoList from "./MeteoList";
import MeteoCard from "./MeteoCard";

const Home = () => {
  return (
    <Container fluid>
      <Row className='d-flex justify-content-center mt-3 gy-3  px-3'>
        <Col xs={12} md={8}>
          <MeteoForm />
        </Col>

        <Col xs={12} md={5}>
          <MeteoCard />
        </Col>
        <Col xs={12} md={5}>
          <Row>
            <MeteoList />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
