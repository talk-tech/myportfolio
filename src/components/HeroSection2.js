import "./HeroSection.css";
import FeatureOne from "../Featured Images/image1.png";
import FeatureTwo from "../Featured Images/image2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

function HeroSection2() {
  return (
    <section className="herosection2">
      <h2 className="container text-center heroSection2-header">
        FEATURED PROJECTS 💼
      </h2>
      <h4 className="container text-center featured-texts">Graphic Design Projects: </h4>
        <Container style={{marginTop: "25px", marginBottom: "25px"}} className="hero-section">
          <Row className="hero-box-1">
            <Col className="hero-section-cards" xs={6} sm={12} md={6} lg={6}>
              <div className="image-card">
                <img src={FeatureOne} alt="Card" className="card-image"  />
              </div>
            </Col>
            <Col className="hero-section-cards" xs={6} sm={12} md={6} lg={6}>
              <div className="image-card">
                <img src={FeatureTwo} alt="Card" className="card-image" />
              </div>
            </Col>
          </Row>
        </Container>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      <Button variant="link" href="/graphicdesign" className="viewFullProjects">View Full Projects</Button>
      </div>
    </section>
  );
}

export default HeroSection2;
