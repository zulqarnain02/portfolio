import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows } from "react-icons/fa";
import { SiIntellijidea } from "react-icons/si";
import { SiWireshark } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
