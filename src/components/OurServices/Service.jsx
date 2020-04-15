import React, { Component } from "react";

class Service extends Component {
  render() {
    const { title, img, category } = this.props.service;
    const { activeCategory } = this.props.value;
    if (category.indexOf(activeCategory) < 0 && activeCategory !== "all") {
      return null;
    }
    return (
      <div>
        <img src={img} alt={title} className="mx-auto" />
        <p className="text-center mt-3 ourServicesFont">{title}</p>
      </div>
    );
  }
}

export default Service;
