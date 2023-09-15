import { Col, Container, Row } from "react-bootstrap";
import MeteoForm from "./MeteoForm";
import MeteoList from "./MeteoList";
import MeteoCard from "./MeteoCard";

const Home = () => {
  return (
    <Container fluid>
      <Row className='d-flex justify-content-center mt-3 gy-3'>
        <Col xs={12} md={6}>
          <MeteoForm />
        </Col>
        <Row className='row-cols-xs-1 row-cols-md-2 mt-3 justify-content-center'>
          <Col xs={12} md={5} className='sticky-top'>
            <Row>
              <Col xs={12}>
                <MeteoCard />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={12} className='d-flex'>
                <MeteoList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Home;
