import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>
        <FontAwesomeIcon icon={faClipboardList} className="icon column-icon" />{" "}
        {title}
      </h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
