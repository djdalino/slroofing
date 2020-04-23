import React, { Component } from "react";
import axios from "axios";
import { servicesOffer } from "../data";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    services: [],
    posts: [],
    category: [],
    post: [],
    blogPost: [],
    categoryList: [],
    activeCategory: "all",
    title: "",
    article: "",
    selected: [],
    blogImage: null,
    email: "",
    password: "",
  };
  componentDidMount() {
    this.setService();
    this.getPost();
    this.getCategory();
  }

  //LOGIN
  login = (user) => {
    return axios
      .post("http://localhost:5000/api/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  onSubmit = (e) => {
    e.preventDefault();
    const User = {
      email: this.state.email,
      password: this.state.password,
    };

    this.login(User)
      .then((res) => {
        if (res) {
          window.location.href = "/admin";
        }
      })
      .catch((err) => console.log(err));
  };

  //POST
  setSelected = (selected) => {
    this.setState({ selected });
  };
  fileSelectedHandler = (e) => {
    this.setState({ blogImage: e.target.files[0] });
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitPost = (e) => {
    const selected = this.state.selected;
    let select = [];
    for (let i = 0; i < selected.length; i++) {
      select = [...select, selected[i].value];
    }
    console.log(select);
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("category", select);
    fd.append("article", this.state.article);
    fd.append("blogImage", this.state.blogImage);

    axios
      .post(`http://localhost:5000/posts/`, fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert("Please select only 1 category"));
  };

  //CATEGORY

  getCategory = async () => {
    const res = await axios.get(`http://localhost:5000/postCategory/`);

    let tempCategory = [];

    res.data.forEach((item) => {
      const singleItem = { ...item };
      tempCategory = [...tempCategory, singleItem];
    });
    this.setState(() => {
      return { category: tempCategory };
    });
  };

  //BLOG
  getBlogitem = (id) => {
    const blog = this.state.posts.find((item) => item._id === id);
    return blog;
  };
  getMatch = (blog, category) => {
    let match = [];
    for (let i = 0; i < blog.length; i++) {
      for (let e = 0; e < category.length; e++) {
        if (blog[i] === category[e]) {
          match.push(blog[i]);
        }
      }
    }

    let tempMatch = [];
    match.forEach((m) => {
      const result = this.state.category.find((item) => item._id === m);
      tempMatch = [...tempMatch, result];
    });
    this.setState(() => {
      return { categoryList: tempMatch };
    });
  };
  handleBlogView = (id) => {
    try {
      const blog = this.getBlogitem(id);
      const category = this.state.category.map((item) => item._id);
      const blogMap = blog.category;
      this.getMatch(blogMap, category);
      this.setState(() => {
        return { blogPost: blog };
      });
    } catch (error) {
      console.log(error);
    }
  };

  getPost = async () => {
    const res = await axios.get("http://localhost:5000/posts/");
    let tempPosts = [];

    res.data.forEach((item) => {
      const singleItem = { ...item };
      tempPosts = [...tempPosts, singleItem];
    });
    this.setState(() => {
      return { posts: tempPosts };
    });
  };

  getDate = (dateString) => {
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
      "December",
    ];
    const date = new Date(dateString);

    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // END BLOG
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
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setSelected: this.setSelected,
          fileSelectedHandler: this.fileSelectedHandler,
          handleInputChange: this.handleInputChange,
          handleSubmitPost: this.handleSubmitPost,
          handleChange: this.handleChange,
          getDate: this.getDate,
          handleBlogView: this.handleBlogView,
          onSubmit: this.onSubmit,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
