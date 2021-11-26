import React from "react";

const Filter = ({ changedFilter }) => {
  function checkboxChanged(e) {
    changedFilter({
      name: e.target.name,
      value: e.target.checked,
    });
  }

  return (
    <div className="filter">
      <label className="checkbox-wrapper">
        <input type="checkbox"></input>
        <span className="checkmark"></span> Draft
      </label>
      <label className="checkbox-wrapper">
        <input type="checkbox"></input>
        <span className="checkmark"></span> Pending
      </label>
      <label className="checkbox-wrapper">
        <input type="checkbox"></input>
        <span className="checkmark"></span> Paid
      </label>
    </div>
  );
};

export default Filter;
