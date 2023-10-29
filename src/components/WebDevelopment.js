import { Row, Col, Container } from "react-bootstrap";
import Web1 from "../images/web1.jpg";
import Web2 from "../images/web2.jpg";
import "./WebDevelopment.css";

function WebDevelopment() {
  return (
    <Container className="web-dev-container">
      <h2 className="container text-center webdevelopment-header">
        WEB DEVELOPMENT 🖥️
      </h2>
      <Row className="web-dev-holder">
        <Col lg={6} className="web-dev-mother">
          <div className="web-dev-box">
            <div className="app-image-box">
              <p className="text-center inner-link-text">
                Click Image to View Site
              </p>
              <a
                href="https://hootchbay.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {/* */}
                <img
                  src={Web1}
                  className="img-fluid web-image"
                  alt="Hootch Bay App"
                />
              </a>
            </div>
            <h6>Hootch Bay App</h6>
            <p className="web-app-dis">
              Movie App that uses Tv Maze Api to search for Movies and Shows
            </p>
          </div>
        </Col>
        <Col lg={6} className="web-dev-mother">
          <div className="web-dev-box">
            <div className="app-image-box">
              <p className="text-center inner-link-text">
                Click Image to View Site
              </p>
              <a
                href="https://todobox.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {/*  */}
                <img
                  src={Web2}
                  className="img-fluid web-image"
                  alt="Todobox App"
                />
              </a>
            </div>
            <h6>Todobox App</h6>
            <p className="web-app-dis">
              a Crud App, where user can write a todo and set a date for a
              specific todo, User can edit and also delete a todo
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default WebDevelopment;
