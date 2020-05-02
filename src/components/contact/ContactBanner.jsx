import React, { Component } from "react";
import Hero from "../Hero";

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
                Let us know how can we help you.{" "}
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
                  <div class="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div class="uabb-info-list-icon info-list-icon-dynamic0">
                      <div class="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span class="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-phone-handset"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic0">
                      <h3 class="uabb-info-list-title">Phone</h3>
                      <div class="uabb-info-list-description uabb-text-editor info-list-description-dynamic0">
                        <p>(02) 4948 6164</p>
                      </div>
                    </div>
                  </div>
                  <div class="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
                <li class="uabb-info-list-item info-list-item-dynamic1">
                  <div class="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div class="uabb-info-list-icon info-list-icon-dynamic1">
                      <div class="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span class="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-envelope2"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic1">
                      <h3 class="uabb-info-list-title">Email</h3>
                      <div class="uabb-info-list-description uabb-text-editor info-list-description-dynamic1">
                        <p>quotes@australiawideroofing.com.au</p>
                      </div>
                    </div>
                  </div>
                  <div class="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
                <li class="uabb-info-list-item info-list-item-dynamic2">
                  <div class="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-top">
                    <div class="uabb-info-list-icon info-list-icon-dynamic2">
                      <div class="uabb-module-content uabb-imgicon-wrap">
                        {" "}
                        <span class="uabb-icon-wrap">
                          <span className="uabb-icon">
                            <i className="ua-icon ua-icon-map-marker"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="uabb-info-list-content uabb-info-list-top info-list-content-dynamic2">
                      <h3 className="uabb-info-list-title">Address</h3>
                      <div className="uabb-info-list-description uabb-text-editor info-list-description-dynamic2">
                        <p>4/2 Statham St, Bennetts Green NSW 2290</p>
                      </div>
                    </div>
                  </div>
                  <div className="uabb-info-list-connector uabb-info-list-top"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
