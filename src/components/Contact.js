import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./Contact.css";
function Contact() {
  return (
    <section>
      <h2 className="container text-center contact-header">CONTACT 📞</h2>
      <Container>
        <div className="contact-me-box">
          <p className="h2 text-center social-media-banners">
            🚀 Let's Create Together! 🎨
          </p>
          <p className="text-center">
            Got an idea? Let's collaborate on your dream project
            <br />
            and make it a reality. Whether you need a stunning website,
            <br />
            eye-catching graphics, or a seamless user experience, I'm here to
            <br />
            bring your vision to life.
          </p>
        </div>
        <Row style={{ margin: "0.5rem" }}>
          <Col sm={12} md={12} lg={6} xl={6} className="services">
            <div>
              <p className="h4">🌟 Services I Offer:</p>
            </div>
            <ListGroup>
              <ListGroup.Item>🔹 Web Development</ListGroup.Item>
              <ListGroup.Item>🔹 Graphic Design</ListGroup.Item>
              <ListGroup.Item>🔹 UI/UX Design</ListGroup.Item>
              <ListGroup.Item>🔹 Branding</ListGroup.Item>
              <ListGroup.Item>🔹 Video Editing</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6} className="contact-details">
            <div>
              <p className="h4">📞 Reach Out:</p>
            </div>
            <ListGroup>
              <ListGroup.Item>
                📮 Email:{" "}
                <a href="mailto:mrmbzulu@gmail.com">mrmbzulu@gmail.com</a>
              </ListGroup.Item>
              <ListGroup.Item>📱 Phone: (064) 661-1390</ListGroup.Item>
              <ListGroup.Item>
                💬 LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/mduduzi-blessing-zulu-215ab9107/">
                  linkedin.com/in/mduduzi-blessing-zulu-215ab9107/
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                📷 Instagram:{" "}
                <a href="https://www.instagram.com/mrmbzulu/">
                  instagram.com/mrmbzulu/
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                🌐 GitHub:{" "}
                <a href="https://github.com/talk-tech">github.com/talk-tech</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
