import React, { Component } from "react";
import Hero from "../Hero";
import ContactUsForm from "./ContactUsForm";
export default class ContactBanner extends Component {
  render() {
    return (
      <div>
        <Hero hero="contactBan banner-tempt">
          <div className="ContactBanner">
            <div style={{ marginTop: "7rem " }}>
              <h1 className="text-uppercase text-center">Contact Us</h1>
              <h3 className="text-capitalize text-center">
                {" "}
                Let us know how we can help.{" "}
              </h3>
            </div>
          </div>
        </Hero>
        <div
          className="fl-module fl-module-info-list fl-node-5bad6f2334e50"
          data-node="5bad6f2334e50"
        >
          <div className="fl-module-content fl-node-content">
            <div className="uabb-module-content uabb-info-list">
              <ul className="uabb-info-list-wrapper uabb-info-list-top">
                <li className="uabb-info-list-item info-list-item-dynamic0">
                  <div className="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div className="uabb-info-list-icon info-list-icon-dynamic0">
                      <div className="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span className="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-phone-handset"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic0">
                      <h3 className="uabb-info-list-title">Phone</h3>
                      <div className="uabb-info-list-description uabb-text-editor info-list-description-dynamic0">
                        <p>402-414-4000</p>
                      </div>
                    </div>
                  </div>
                  <div className="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
                <li className="uabb-info-list-item info-list-item-dynamic1">
                  <div className="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div className="uabb-info-list-icon info-list-icon-dynamic1">
                      <div className="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span className="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-envelope2"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic1">
                      <h3 className="uabb-info-list-title">Email</h3>
                      <div className="uabb-info-list-description uabb-text-editor info-list-description-dynamic1">
                        <p>slroofingllcs@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
                <li className="uabb-info-list-item info-list-item-dynamic2">
                  <div className="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div className="uabb-info-list-icon info-list-icon-dynamic2">
                      <div className="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span className="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-map-marker"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic2">
                      <h3 className="uabb-info-list-title">Address</h3>
                      <div className="uabb-info-list-description uabb-text-editor info-list-description-dynamic2">
                        <p>United State of America</p>
                      </div>
                    </div>
                  </div>
                  <div className="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    );
  }
}
