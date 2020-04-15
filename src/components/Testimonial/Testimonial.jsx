// import React, { useState, useEffect } from "react";
// import { css, cx } from "emotion";
// const Testimonial = () => {
//   const qoutes = {
//     0: {
//       client: "Darren James",
//       testimonial:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto, voluptatum praesentium consequuntur veniam dolores sint commodi sapiente iure aliquid",
//     },
//     1: {
//       client: "Hanna Jane",
//       testimonial:
//         "Culpa at vitae deleniti, facilis explicabo ipsam ea! Vitae id facilis velit, perspiciatis delectus aspernatur voluptates totam, earum repellat pariatur atque?",
//     },
//     2: {
//       client: "Rhianne Jodie",
//       testimonial:
//         "Mollitia quidem sint maxime, illo perspiciatis a magni, voluptatem exercitationem recusandae sed incidunt molestias ratione? Dolores quod reprehenderit debitis eveniet suscipit delectus eligendi repellat ea.,",
//     },
//     3: {
//       client: "Dario Dalino",
//       testimonial:
//         "officiis distinctio modi perspiciatis voluptates ducimus a amet necessitatibus? Molestias ratione hic nisi suscipit, vero similique alias esse at aut aspernatur neque tempore, mollitia doloremque ab quod numquam consequuntur commodi, quis illo incidunt laudantium fugiat! Fuga maxime, culpa deserunt ut incidunt sapiente atque rem vero nam dolor ",
//     },
//   };
//   let [initial, setInitial] = useState(0);
//   const [current, setCurrent] = useState(qoutes[initial]);
//   const [active, setActive] = useState(initial);
//   if (initial >= 3) {
//     setInitial(-1);
//   }
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setInitial((initial = initial + 1));

//       setCurrent(qoutes[initial]);
//       setActive(initial);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [initial]);
//   const handleSetClick = (event) => {
//     setCurrent(qoutes[event.target.getAttribute("data-qoute")]);
//     setActive(event.target.getAttribute("data-qoute"));
//   };

//   return (
//     <div
//       className={css`
//         width: 1000px;
//         margin: 4rem auto;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         p {
//           text-align: center;
//           margin-bottom: 5px;
//           font-size: 1.3rem;
//           transition: all 2s ease-in-out;
//         }
//       `}
//     >
//       <h5 className="text-center text-uppercase main-blue mainText">
//         client testimonial
//       </h5>
//       <h1 className="text-center text-capitalize mainText">
//         what our customers say about us
//       </h1>
//       <p className="my-3">{current.testimonial}</p>
//       <p>{current.client}</p>
//       <div
//         className={css`
//           display: flex;
//           span {
//             height: 30px;
//             width: 30px;
//             margin: 0 3px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//           }

//           span::before {
//             content: "";
//             height: 20px;
//             width: 20px;
//             background: #ffffff;
//             border-radius: 50%;
//             border: 1px solid #000000;
//             transition: all 0.5s ease-in-out;
//           }

//           span[data-qoute="${active}"]::before{
//               background-color: #000000;
//           }
//         `}
//       >
//         {Object.keys(qoutes).map((index) => (
//           <span
//             onClick={(event) => handleSetClick(event)}
//             data-qoute={index}
//             key={index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";

function Testimonial() {
  return (
    <div className="my-15">
      <h5 className="text-center text-uppercase main-blue mainText">
        client testimonial
      </h5>
      <h1 className="text-center text-capitalize mainText">
        what our customers say about us
      </h1>
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
