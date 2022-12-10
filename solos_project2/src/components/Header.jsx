import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faEarthAsia} className="header--icon" />
      <h4 className="header--title">my travel journal</h4>
    </header>
  );
}
