import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Zulqarnian </span>
            from <span className="purple">bidar, karnataka, India.</span>
            <br />
            pursuing B.Tech in Computer Science from PES University RR Campus, Bangalore.
            <br />
            I love exploring and building projects using various technologies. Inspired by innovation and technology, I actively look for opportunities to develop my skillset and use it to solve challenging real-world problems. Expanding my network, teaching and building a collaborative environment to grow together
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammed Zulqarnian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
