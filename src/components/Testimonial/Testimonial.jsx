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
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="4"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="5"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="6"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="7"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            className="bg-dark"
            data-slide-to="8"
          ></li>
        </ol>
        <div className="carousel-inner container-box">
          <div className="carousel-item active my-5 ">
            <p className="text-center w-50 mx-auto">
              Shaun helped find and fix a leak on the roof of my mom's place. He
              was great at explaining the trouble areas and ran a few options by
              us so we could decide which route to take. Excellent service.
              Highly recommended.
            </p>
            <p className="text-center">Tim Steele</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              SL Roofing returned my call the same day I called and came out the
              next day to give me an estimate and started work the following
              week. Shaun and his crew where very professional. The got my roof
              up in two days. Which was awesome but the best thing was the way
              they communicate with us. We always felt we knew what the plan
              was. GREAT JOB!!
            </p>
            <p className="text-center">Christian Case</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Shaun and his crew do a very good job with attention to detail!
              Even cane on a Sunday to finish a project before graduation! Will
              recommend to everyone!
            </p>
            <p className="text-center">Ryan Doud</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Shaun at SL Roofing redid my kitchen and my basement. He was
              quick, affordable, and professional. Iwill definitely hire him
              next time I need work done. If he is available
            </p>
            <p className="text-center">TIM davis</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Good to meet Shaun and his crew. We needed a quick roofing repair
              and he made it happen. When your dealing with older homes and lots
              of oddities. he knew exactly how to fix the issue. A good guy and
              hard worker. Job site completely cleaned up the way you would
              expect. We'll hire SL Roofing & Renovations again. Happy customer
            </p>
            <p className="text-center">Jerry Johnson</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              If you want a good looking renovations. I highly recommend SL
              roofing renovations. really did a great job. one happy customer
              here ! :)
            </p>
            <p className="text-center">Anna Madsen</p>
          </div>
          <div className="carousel-item my-5 ">
            <p className="text-center w-50 mx-auto">
              Highy recommend. Rebuild our retaining wall, great design, great
              work.
            </p>
            <p className="text-center">Richard Madsen</p>
          </div>
        </div>
        <div className="carousel-item my-5 ">
          <p className="text-center w-50 mx-auto">
            Very professional, fanstastic work. Fixed a leak in my roof when
            others failed, and in one day. Great job!
          </p>
          <p className="text-center">Holly Strehlow</p>
        </div>
        <div className="carousel-item my-5 ">
          <p className="text-center w-50 mx-auto">
            I recently had my roof redone by SL roofing and renovations and I
            could not be happier. Shaun and his crew were very professional and
            did a tremendous job. Everything around my house was clean and back
            to the way it was before they started. I highly recommend SL roofing
            to anyone.
          </p>
          <p className="text-center">Robert Jennings</p>
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
