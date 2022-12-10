import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Article(props) {
  //props == object
  return (
    <article className="article">
      <img src={props.imageUrl} className="article--image" />
      <div className="article--container">
        <div className="article--location">
          <FontAwesomeIcon icon={faLocationDot} className="article--icon" />
          <p className="article--country">{props.location}</p>
          <a href={props.googleMapsUrl} className="article--link">
            view on google maps
          </a>
        </div>
        <h3 className="article--title">{props.title}</h3>
        <div className="article--duration">
          {props.startDate} - {props.endDate}
        </div>
        <p className="article--desc">{props.description}</p>
      </div>
    </article>
  );
}

{
  /* <FontAwesomeIcon icon={faLocationDot} /> */
}
