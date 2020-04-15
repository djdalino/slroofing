import React, { Component } from "react";
import { servicesOffer } from "../data";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    services: [],
    activeCategory: "all",
  };
  componentDidMount() {
    this.setService();
  }

  handleChange = (category) => {
    this.setState({ activeCategory: category });
  };

  setService = () => {
    let tempServices = [];
    servicesOffer.forEach((item) => {
      const singleItem = { ...item };
      tempServices = [...tempServices, singleItem];
    });
    this.setState(() => {
      return { services: tempServices };
    });
  };
  render() {
    console.log(this.state.activeCategory);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
