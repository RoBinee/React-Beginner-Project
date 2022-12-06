import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info--container">
      <img src="./images/profile.jpg" className="info--photo" />
      <h1 className="info--name">Robin Lee</h1>
      <p className="info--job">frontend Developer</p>
      <p className="info--webname">website name</p>
      <button className="info--btn">
        <FontAwesomeIcon icon={faEnvelope} className="btn-icon" />
        email
      </button>
    </div>
  );
}
