import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Admin from "./pages/Admin";
import BlogPostView from "./components/Blog/BlogPostView";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/about" component={About} />s
        <Route path="/blog/:id" component={BlogPostView} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
