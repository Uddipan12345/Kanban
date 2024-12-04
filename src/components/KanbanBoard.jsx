import React, { useEffect, useState } from "react";
import { fetchTickets } from "../services/api";
import GroupingDropdown from "./GroupingDropdown";
import SortDropdown from "./SortDropdown";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    fetchTickets().then((data) => setTickets(data.tickets));
  }, []);

  const groupTickets = () => {
    const groups = {};
    tickets.forEach((ticket) => {
      const key = ticket[groupBy];
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
    });
    return groups;
  };

  const sortedGroupedTickets = () => {
    const grouped = groupTickets();
    const sorted = {};
    Object.keys(grouped).forEach((key) => {
      sorted[key] = grouped[key].sort((a, b) =>
        sortBy === "priority"
          ? b.priority - a.priority
          : a.title.localeCompare(b.title)
      );
    });
    return sorted;
  };

  const groupedTickets = sortedGroupedTickets();

  return (
    <div>
      <div className="controls">
        <GroupingDropdown onGroupChange={setGroupBy} />
        <SortDropdown onSortChange={setSortBy} />
      </div>
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((group) => (
          <KanbanColumn
            key={group}
            title={group}
            tickets={groupedTickets[group]}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
