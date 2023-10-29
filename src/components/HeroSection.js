import React from "react";
import myHeroImage from "../My Images/pic.png";
import "./HeroSection.css";
import HeroSection2 from "./HeroSection2";
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="heroSection-one">
      <div className="separator"></div>
      <Container className="text-center hero-section-box">
        <Row className="justify-content-center align-items-center home-box">
          <Col md={6}>
            <h1 className="display-6 hero-header">
              Welcome to Mduduzi Projects
            </h1>
            <h1 className="display-6 fw-bold fst-italic words hero-header-2">
              A Full Stack{" "}
              <span className="Website-span">Website Developer</span> and
              Graphic <span className="design">Designer</span>
            </h1>
            <p className="hero-1st-texts">
              Follow my journey and view all creativity below
            </p>
            {/* Dropdown Button */}
            <Dropdown>
              <Dropdown.Toggle className="smooth-button" id="portfolioDropdown">
                Portfolio
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/webdevelopment">Web Development</Dropdown.Item>
                <Dropdown.Item href="/graphicdesign">Graphic Design</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* End Dropdown Button */}
          </Col>

          <Col md={6} className="imagebox">
            <img
              src={myHeroImage}
              className="img-fluid hero-image"
              alt="niteen"
            />
          </Col>
        </Row>
      </Container>
      <HeroSection2 />
    </section>
  );
}

export default HeroSection;
