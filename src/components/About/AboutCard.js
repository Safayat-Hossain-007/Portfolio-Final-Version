import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Safayat Hossain </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I'm driven to leverage technology for innovative solutions. With a solid foundation in programming, networking, and database management, I'm eager to contribute to cutting-edge projects. My hands-on approach and problem-solving mindset allow me to excel in challenging environments. Looking forward to applying my skills to make a positive impact in the tech industry.
            <br />
            I'm a Final Year BSc Engineering Student in Information and Communication Technology. (Aspiring Data Scientist | Passionate About AI, Machine Learning, and Data Analytics)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Whoever fights monsters should see to it that in the process he does not become a monster.And if you gaze long enough into an abyss, the abyss will gaze back into you {" "}
          </p>
          <footer className="blockquote-footer">Friedrich Nietzsche</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
