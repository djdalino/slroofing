import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import GalleryView from "./galleryView";
import Footer from "../Footer/Footer";
const Gallery = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero hero="galleryHero">
        <div className="blogBanner">
          <div style={{ marginTop: "7rem " }}>
            <h1 className="text-uppercase text-center">photo gallery</h1>
            <h3 className="text-capitalize text-center">Check out our work</h3>
          </div>
        </div>
      </Hero>
      <GalleryView />
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
