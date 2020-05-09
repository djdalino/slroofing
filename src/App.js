import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import BlogPostView from "./components/Blog/BlogPostView";
import Contact from "./pages/Contact";
import ScrollIntoView from "./ScrollIntoView";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <ScrollIntoView>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/blog/:id" component={BlogPostView} />
          <Route path="/services" component={Services} />
          <Route path="/admin" component={Admin} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </ScrollIntoView>
    </React.Fragment>
  );
}

export default App;

window.scrollTo(0, 1000);
