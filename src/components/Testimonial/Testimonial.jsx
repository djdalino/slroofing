import React from "react";

function Testimonial() {
  return (
    <div className="my-15">
      <h5 className="text-center text-uppercase main-blue mainText">
        client testimonial
      </h5>
      <h2 className="text-center text-capitalize mainText">
        what our customers say about us
      </h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active bg-dark"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="1"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="2"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="3"
          ></li>
        </ol>
        <div className="carousel-inner container-box">
          <div className="carousel-item active my-5 ">
            <p className="text-center w-50 mx-auto">
              repellendus distinctio deserunt delectus laborum ipsa at ex
              veritatis expedita ut nemo. Maxime repellendus, adipisci, saepe
              recusandae quae soluta quam eligendi quis, aliquam ad nulla?
              Deserunt nam fuga alias enim? Nostrum quos obcaecati recusandae
              odit culpa doloribus ab assumenda!
            </p>
            <p className="text-center">Darren James</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              maiores delectus saepe atque at nam necessitatibus recusandae
              aliquid placeat ipsa facere! Repudiandae placeat officiis unde
              totam laudantium, sit quod numquam delectus sunt, eum tempora
              inventore aliquid asperiores officia ullam quisquam aut fugit
              vitae doloribus distinctio praesentium ratione. Blanditiis
              officiis ullam quam sequi, molestiae aspernatur.
            </p>
            <p className="text-center">Hanna Jane</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Consequuntur adipisci laboriosam eos ipsa ab, explicabo quos vero
              facilis at magnam repellendus, quo distinctio. Molestiae earum
              aspernatur qui voluptates ipsam suscipit asperiores nobis
              praesentium commodi?
            </p>
            <p className="text-center">Rhianne Jodie</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              quaerat sunt ut at, aliquam tempora consequuntur eligendi vero,
              recusandae impedit optio dolor ab itaque facere facilis eius ipsum
              ducimus magni!
            </p>
            <p className="text-center">Uncle Ben</p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="fas fa-arrow-left arrow main-dark"
            aria-hidden="true"
          ></span>
          <span className="sr-only text-dark">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="fas fa-arrow-right arrow main-dark"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Testimonial;
