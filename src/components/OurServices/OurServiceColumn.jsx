import React from "react";
function OurServicesColumn({ item, value }) {
  const { handleChange } = value;

  return (
    <div
      className="text-sm mx-auto cursor-pointer"
      onClick={() => handleChange(item)}
    >
      <p className="text-uppercase mainText">{item}</p>
    </div>
  );
}

export default OurServicesColumn;
