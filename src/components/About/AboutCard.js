import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saran A </span>
            from <span className="purple"> Karur, India.</span>
            <br />
            I am currently pursuing  <span className="purple">Computer Science</span>
            <br />
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "  I don't just write code, I write code poetry"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
