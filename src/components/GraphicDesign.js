import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./GraphicDesign.css";
import StanCoBanner from "../graphic designs/StanCo-banner.jpg";
import FashionBratzBanner from "../graphic designs/fashionbratz-banner.jpg";
import Mazda1 from "../graphic designs/MAZDA1.jpg";
import Mazda2 from "../graphic designs/MAZDA2.jpg";
import Mazda3 from "../graphic designs/MAZDA3.jpg";
import Mazda4 from "../graphic designs/MAZDA4.jpg";
import Renault1 from "../graphic designs/renault1.jpg";
import Renault2 from "../graphic designs/renault2.jpg";
import Renault3 from "../graphic designs/renault3.jpg";
import Renault4 from "../graphic designs/renault4.jpg";
import Pamphlet1 from "../Featured Images/image1.png";
import Pamphlet2 from "../Featured Images/image2.png";
import Logo1 from "../logos/logo1.png";
import Logo2 from "../logos/logo2.png";
import Logo3 from "../logos/logo3.png";
import Logo4 from "../logos/logo4.png";
import Trudemy from "../graphic designs/Trudemy flyer.jpg";
import Flyer from "../graphic designs/ORIGINAL FLYER.jpg";

function GraphicDesign() {
  return (
    <section>
      <div>
        <h2 className="container text-center graphic-design-header">
          GRAPHIC DESIGN 🎨
        </h2>
      </div>
      <Container className="social-media-container">
        <p className="h2 text-center social-media-banners">
          SOCIAL MEDIA AND BANNER DESIGNS
        </p>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <Row className="graphic-design-card">
            <Col xs={12} sm={12} md={12} lg={7} className="banner-card">
              <h6>Website/Social Media Banners</h6>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img src={StanCoBanner} className="img-fluid" alt="one" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={FashionBratzBanner} className="img-fluid" alt="two" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} className="mazda-card">
              <h6>Mazda Social Media Ads</h6>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img src={Mazda1} className="img-fluid" alt="three" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Mazda2} className="img-fluid" alt="four" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Mazda3} className="img-fluid" alt="five" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Mazda4} className="img-fluid" alt="six" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
        <Container>
          <Row className="ranault-mother">
            <Col xs={12} sm={12} md={12} lg={5} className="renault-card">
              <h6>Renault Social Media Ads</h6>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img src={Renault1} className="img-fluid renault-image" alt="seven"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Renault2} className="img-fluid renault-image" alt="eight" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Renault3} className="img-fluid renault-image" alt="nine" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Renault4} className="img-fluid renault-image" alt="ten" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} className="freelancing-card">
              <h6>Freelancing Social Media Projects</h6>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img src={Trudemy} className="img-fluid" alt="eleven" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Flyer} className="img-fluid" alt="twelve" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pamphlets-container">
        <p className="h2 text-center social-media-banners pamphlets-title">
          PAMPHLETS DESIGNS
        </p>
        <Row>
          <Col lg={6}>
            <div className="pamphlet-image">
              <img
                src={Pamphlet1}
                className="img-fluid"
                style={{ width: "450px" }}
                alt="therteen"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="pamphlet-image">
              <img
                src={Pamphlet2}
                className="img-fluid"
                style={{ width: "450px" }}
                alt="fourteen"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="logo-container">
        <p className="h2 text-center social-media-banners logo-heading-title">
          LOGO DESIGNS
        </p>
        <Row className="logo-box-holder">
          <Col lg={3}>
            <div className="logo-box">
              <img
                src={Logo1}
                className="img-fluid pamphlete-logo-image"
                style={{ width: "450px" }}
                alt="fiteen"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="logo-box">
              <img
                src={Logo2}
                className="img-fluid pamphlete-logo-image"
                style={{ width: "450px" }}
                alt="sixteen"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="logo-box">
              <img
                src={Logo3}
                className="img-fluid pamphlete-logo-image "
                style={{ width: "450px" }}
                alt="seventeen"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="logo-box">
              <img
                src={Logo4}
                className="img-fluid pamphlete-logo-image"
                style={{ width: "450px" }}
                alt="eighteen"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default GraphicDesign;
