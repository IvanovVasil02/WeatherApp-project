import { Col, Container, Row } from "react-bootstrap";
import MeteoForm from "./MeteoForm";
import MeteoList from "./MeteoList";
import MeteoCard from "./MeteoCard";

const Home = () => {
  return (
    <Container fluid>
      <Row className='d-flex justify-content-center mt-3 gy-3'>
        <Col xs={12}>
          <MeteoForm />
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} className='d-flex'>
              <MeteoCard />
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} className='d-flex'>
              <MeteoList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
