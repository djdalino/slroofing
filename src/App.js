import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Admin from "./pages/Admin";
import BlogPostView from "./components/Blog/BlogPostView";
import Contact from "./pages/Contact";
import ScrollIntoView from "./ScrollIntoView";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <ScrollIntoView>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/about" component={About} />s
          <Route path="/blog/:id" component={BlogPostView} />
          <Route path="/admin" component={Admin} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </ScrollIntoView>
    </React.Fragment>
  );
}

export default App;

window.scrollTo(0, 1000);
