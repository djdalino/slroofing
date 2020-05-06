import React from "react";
function ServicesOfferColumn({ item, value }) {
  const { handleServicesOfferChange } = value;

  return (
    <div
      className="text-sm mx-auto cursor-pointer"
      onClick={() => handleServicesOfferChange(item)}
    >
      <p className="text-uppercase mainText">{item}</p>
    </div>
  );
}

export default ServicesOfferColumn;
