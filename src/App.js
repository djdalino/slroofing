import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Gallery from "./components/Gallery/gallery";
import About from "./pages/About";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import BlogPostView from "./components/Blog/BlogPostView";
import ServiceSingleView from "./components/Services/ServicesSingleView";
import Contact from "./pages/Contact";
// import ScrollIntoView from "./ScrollIntoView";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/blog/:id" component={BlogPostView} />
        <Route path="/service-offer/:id" component={ServiceSingleView} />
        <Route path="/services" component={Services} />
        <Route path="/admin" component={Admin} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

window.scrollTo(0, 1000);
