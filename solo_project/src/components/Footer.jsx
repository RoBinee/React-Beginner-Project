import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <ul className="footer--sns">
      <li>
        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
      </li>
      <li>
        <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
      </li>
      <li>
        <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
      </li>
      <li>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </li>
      <li>
        <FontAwesomeIcon icon={faGithubSquare} className="icon" />
      </li>
    </ul>
  );
}
