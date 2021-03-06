import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <footer>
            <div className="alfie">
              <p>
                Made by{" "}
                <span
                  className="link-to-alfie"
                >
                  Abhilash Chaparala
                </span>
              </p>
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
