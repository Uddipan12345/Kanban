import React from "react";

const GroupingDropdown = ({ onGroupChange }) => {
  return (
    <select onChange={(e) => onGroupChange(e.target.value)}>
      <option value="status">By Status</option>
      <option value="user">By User</option>
      <option value="priority">By Priority</option>
    </select>
  );
};

export default GroupingDropdown;
