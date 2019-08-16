import React from "react";

export default function Filter(props) {
  const size = ["S", "M", "L", "XL"];
  const handleClick = size => {
    props.toggleFilter(size);
  };
  return (
    <div className="filter">
      <h3>Sizes:</h3>
      {size.map(s => {
        const index = props.size.indexOf(s);
        return (
          <div
            className={`size ${index !== -1 ? "active" : ""}`}
            onClick={() => handleClick(s)}
          >
            {s}
          </div>
        );
      })}
    </div>
  );
}
