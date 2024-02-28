import React, {useState} from "react";
import logo from "../img/slroofinglogo.png";
import BookNowModal from "./Modal/BookNowModal";
import { ProductConsumer } from "../stateManagement/context";
import { Link, useLocation } from "react-router-dom";

const NAV_MENU = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/services',
    name: 'Services'
  },
  {
    path: '/blog',
    name: 'Blog'
  },
  {
    path: '/gallery',
    name: 'Gallery'
  },
  {
    path: '/contact',
    name: 'Contact Us'
  },
]
const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen)
  }
console.log({location })
  return (
    <>
   
    <nav className="sl-navbar">
      <div className="sl-nav-center">
        <div className="sl-nav-header">
          <Link to="/">
            <img className="sl-nav-logo" src={logo} alt="slroofing-logo" />
          </Link>
          <span className="contact">
            <i className="fa fa-phone"></i>712-898-0221
          </span>
          {/* Burger */}
          <div className="sl-nav-burger" onClick={() => handleToggle()}>
            <div className={isOpen ? "toggle line1" : "line1"} />
            <div className={isOpen ? "toggle line2" : "line2"} />
            <div
              className={isOpen ? "toggle line3 wew" : "line3"}
            />
          </div>
        </div>

        <ul
          className={
            isOpen ? "sl-nav-links sl-show-nav" : "sl-nav-links"
          }
        >
          {
            NAV_MENU.map((menu) => {
              console.log({isEqual: menu.path == location.pathname, menu: menu.path, location: location.pathname})
              return (
                <li key={menu.name} onClick={() =>handleToggle()}>
                  <Link className={`${menu.path == location.pathname ? 'nav-item-active' : ''}`} to={menu.path}>{menu.name}</Link>
                </li>
              )
            })
          }
          <ProductConsumer>
            {value => {
              const { isBookNow, handleBookNowModal } = value;
              return (
                <div>
                  <li className="active">
                    <button
                      className="btn-book btn-secondary text-uppercase mx-3 rad"
                      onClick={handleBookNowModal}
                    >
                      book now
                    </button>
                  </li>
                  {isBookNow ? <BookNowModal /> : null}
                </div>
              );
            }}
          </ProductConsumer>
        </ul>
      </div>
    </nav>
    </>
  );
}
// class Navbar extends React.Component {
//   state = {
//     isOpen: false
//   };

//   handleToggle = () => {
//     window.scrollTo(0, 0);
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     const params = useParams()
//     console.log({params})
//     return (
//       <nav className="sl-navbar">
//         <div className="sl-nav-center">
//           <div className="sl-nav-header">
//             <Link to="/">
//               <img className="sl-nav-logo" src={logo} alt="slroofing-logo" />
//             </Link>
//             <span className="contact">
//               <i className="fa fa-phone"></i>712-898-0221
//             </span>
//             {/* Burger */}
//             <div className="sl-nav-burger" onClick={() => this.handleToggle()}>
//               <div className={this.state.isOpen ? "toggle line1" : "line1"} />
//               <div className={this.state.isOpen ? "toggle line2" : "line2"} />
//               <div
//                 className={this.state.isOpen ? "toggle line3 wew" : "line3"}
//               />
//             </div>
//           </div>

//           <ul
//             className={
//               this.state.isOpen ? "sl-nav-links sl-show-nav" : "sl-nav-links"
//             }
//           >
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/">Home</Link>
//             </li>
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/about">About</Link>
//             </li>
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/services">Services</Link>
//             </li>
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/gallery">Gallery</Link>
//             </li>
//             <li className="active" onClick={() => this.handleToggle()}>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//             <ProductConsumer>
//               {value => {
//                 const { isBookNow, handleBookNowModal } = value;
//                 return (
//                   <div>
//                     <li className="active">
//                       <button
//                         className="btn-book btn-secondary text-uppercase mx-3 rad"
//                         onClick={handleBookNowModal}
//                       >
//                         book now
//                       </button>
//                     </li>
//                     {isBookNow ? <BookNowModal /> : null}
//                   </div>
//                 );
//               }}
//             </ProductConsumer>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

export default Navbar;
