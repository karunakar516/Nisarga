import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import house from "../assets/img/trash.png";
import local from "../assets/img/dustbin.png";
import canal from "../assets/img/sewage.png";
import issues from "../assets/img/warning.png";
import { BookingForm1 } from "./HouseForm";
import { BookingForm2 } from "./LocalForm";
import { BookingForm3 } from "./CanalForm";
import { BookingForm4 } from "./IssueForm";

export const Booking = () => {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleFormOpen1 = () => {
    setShowForm1(true);
  };

  const handleFormClose1 = () => {
    setShowForm1(false);
  };

  const handleFormOpen2 = () => {
    setShowForm2(true);
  };

  const handleFormClose2 = () => {
    setShowForm2(false);
  };

  const handleFormOpen3 = () => {
    setShowForm3(true);
  };

  const handleFormClose3 = () => {
    setShowForm3(false);
  };

  const handleFormOpen4 = () => {
    setShowForm4(true);
  };

  const handleFormClose4 = () => {
    setShowForm4(false);
  };

  return (
    <section className="skill" id="booking">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Book A Pickup</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item" onClick={handleFormOpen1}>
                  <img src={house} alt="Image" className="carousel-img" />
                  <h5>House Bin</h5>
                </div>
                <div className="item" onClick={handleFormOpen2}>
                  <img src={local} alt="Image" className="carousel-img" />
                  <h5>Local Bin</h5>
                </div>
                <div className="item" onClick={handleFormOpen3}>
                  <img src={canal} alt="Image" className="carousel-img" />
                  <h5>Canal</h5>
                </div>
                <div className="item" onClick={handleFormOpen4}>
                  <img src={issues} alt="Image" className="carousel-img" />
                  <h5>Other Issues</h5>
                </div>
              </Carousel>
              {showForm1 && <BookingForm1 onClose={handleFormClose1} />}
              {showForm2 && <BookingForm2 onClose={handleFormClose2} />}
              {showForm3 && <BookingForm3 onClose={handleFormClose3} />}
              {showForm4 && <BookingForm4 onClose={handleFormClose4} />}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
