import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <section className="aboutus" id="aboutus">
      <Container>
        <Row>
          <Col>
            <div className="aboutus-bx">
              <h2>About Us</h2>
              <p>
                Nisarga is a user-friendly solution designed to address the
                issue of waste management and its adverse effects on public
                health. We believe in the idea of a cleaner, greener society and
                strive to make it a reality through our innovative technology.
                As we face widespread sickness and virus transmission, it is
                crucial to prioritize sanitation and cleanliness in our
                surroundings. However, with the lack of proper waste management
                methods, garbage accumulation on the streets is becoming a major
                contributing factor to the development of diseases like corona,
                dengue, and malaria. Nisarga offers a simple user interface or
                website that connects users with independent garbage collectors
                regulated by the government. With just a click of a button,
                users can schedule a house dustbin pickup and notify the garbage
                collectors when their home's trash can is full. Additionally,
                Nisarga allows users to report issues such as neighbourhood
                dustbin overflow or clogged canals to the collectors, making the
                waste management process more efficient and effective. Our goal
                is to create a society that is cleaner and healthier. Nisarga
                not only reduces the need for manpower and human resources, but
                it also saves time, energy, and fuel. With the help of our
                product, we can prevent diseases caused by improper waste
                management and promote a cleaner, greener future for everyone.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
