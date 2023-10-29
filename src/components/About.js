import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImage1 from "../My Images/about-image1.jpg";
import AboutImage2 from "../My Images/about-image2.jpg";
import AboutImage3 from "../My Images/about-image3.jpg";
import WebDevelopment from "../Qualifications/web-developer.jpg";
import GraphicDesign from "../Qualifications/graphic-design.jpg";
import Carousel from "react-bootstrap/Carousel";


function About() {
  return (
    <section>
      <h2 className="container text-center about-header">ABOUT 📣</h2>
      <Container className="about-holder">
        <Row className="about-container">
          <Col xs={12} sm={12} md={12} lg={8} xl={8} >
            <p className="h4 text-body-secondary">
              Crafting Digital Dreams: Where Code Meets Creativity
            </p>
            <p>
              My name is Mduduzi Blessing Zulu, and I am a Full Stack MERN
              Developer with a strong background in Graphic Design.
              <br />
              I recently completed a rigorous Full Stack Web Development
              Bootcamp at HyperionDev, and I also hold a Graphic Design
              certificate from Udemy.
              <br />
              <br />
              Armed with these qualifications, I've acquired a comprehensive
              understanding of both the technology and creative industries. In
              the realm of web development, I possess expertise in CSS, HTML,
              Vanilla JavaScript, React, Express, Node.js, and MongoDB. This
              knowledge equips me to craft seamless, end-to-end solutions, from
              the back-end to the front-end of web applications. In the domain
              of graphic design, I'm proficient in Adobe Photoshop, Illustrator,
              InDesign, and possess fundamental skills in Adobe Premiere Pro.
              <br />
              <br />
              This skill set empowers me to conceive and execute brand
              development projects, encompassing everything from logo design to
              the creation of eye-catching flyers. I'm also adept at sketching
              web designs before bringing them to life in the development phase.
              I invite you to explore my portfolio, where you can peruse my most
              recent projects. Please feel free to reach out if you have any
              questions or if you'd like to collaborate on an exciting venture.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="about-carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    src={AboutImage1}
                    text="First slide"
                    className="img-fluid about-image"
                    alt="mdu1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={AboutImage2}
                    text="First slide"
                    className="img-fluid about-image"
                    alt="mdu2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={AboutImage3}
                    text="First slide"
                    className="img-fluid about-image"
                    alt="mdu3"
                  />
                </Carousel.Item>
              </Carousel>
          </Col>
        </Row>
      </Container>
      <p className="h4 text-body-secondary text-center">QUALIFICATIONS 🎓</p>
      <Container className="qualification-container">
        <Row className="qualification-certificate-holder">
          <Col
            className="container-fluid d-flex justify-content-center align-items-center certificate-holder"
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <p className="h4 text-body-secondary text-center qualification-word">
              Full Stack Web Developer
            </p>
            <img src={WebDevelopment} className="qualification-image" alt="hyperion"/>
          </Col>
          <Col
            className="container-fluid d-flex justify-content-center align-items-center certificate-holder"
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <p className="h4 text-body-secondary text-center qualification-word">
              Graphic Design
            </p>
            <img src={GraphicDesign} className="qualification-image" alt="udemy" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
