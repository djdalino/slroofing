import React, { Component } from "react";
import axios from "axios";
import { servicesOffer } from "../data";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    services: [],
    posts: [],
    activeCategory: "all",
    isDark: true
  };
  componentDidMount() {
    this.setService();
    this.getPost();
  }
  //handle change color
  handleChangeColor = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  //BLOG
  getPost = async () => {
    const res = await axios.get("http://localhost:5000/posts/");
    let tempPosts = [];

    res.data.forEach(item => {
      const singleItem = { ...item };
      tempPosts = [...tempPosts, singleItem];
    });
    this.setState(() => {
      return { posts: tempPosts };
    });
  };

  getDate = dateString => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(dateString);

    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  handleSinglePost = id => {
    window.location.pathname = `/blog/${id}`;
  };

  // END BLOG
  handleChange = category => {
    this.setState({ activeCategory: category });
  };

  setService = () => {
    let tempServices = [];
    servicesOffer.forEach(item => {
      const singleItem = { ...item };
      tempServices = [...tempServices, singleItem];
    });
    this.setState(() => {
      return { services: tempServices };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          getDate: this.getDate,
          handleSinglePost: this.handleSinglePost,
          handleGetPost: this.handleGetPost,
          handleChangeColor: this.handleChangeColor
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
