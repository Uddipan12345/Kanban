import React from "react";
//import "..styles/styles.css";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ ticket }) => {
  const { title, tag, priority } = ticket;

  const priorityLevels = [
    {
      label: "No Priority",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon no-priority"
        />
      ),
    },
    {
      label: "Low",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon low-priority"
        />
      ),
    },
    {
      label: "Medium",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon medium-priority"
        />
      ),
    },
    {
      label: "High",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon high-priority"
        />
      ),
    },
    {
      label: "Urgent",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon urgent-priority"
        />
      ),
    },
  ];

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>
        <FontAwesomeIcon icon={faTag} className="icon tag-icon" />{" "}
        {tag.join(", ")}
      </p>
      <p>
        Priority: {priorityLevels[priority].icon}{" "}
        {priorityLevels[priority].label}
      </p>
    </div>
  );
};

export default Card;
