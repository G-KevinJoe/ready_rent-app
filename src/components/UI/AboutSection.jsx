import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/F40.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to READY RENT GO! service</h2>
              <p className="section__description">
                
            "Welcome to READY RENT GO! Your premier destination for hassle-free car 
            rentals and seamless adventures. At READY RENT GO!, we understand that
             every journey begins with a reliable ride. Whether you're embarking on
              a spontaneous road trip or need a convenient solution for your daily commute,
               we've got you covered. With a diverse fleet of well-maintained vehicles and
                a commitment to exceptional service, we're here to make your 
                rental experience smooth, convenient, and unforgettable.
                 Get ready to rent, get set to go, and let's make your travel
                  dreams a reality with READY RENT GO!"
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> LONG TERM RENTALS FOR PERMANENT RESIDENTS
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> FLEXIBLE SERVICE AVAILABLE 
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 1000+ happy customers,yup its a lie indeed ..
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> OFFERS AVAILABLE FOR LOYAL CUSTOMERS 
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
