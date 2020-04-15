import React from "react";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-box ">
        <h1 className="text-uppercase">subscribe</h1>
        <p>
          Sign up to receive maintenance reminders and hear about our latest
          project
        </p>
        <div className="subscribe-container">
          <input
            type="text"
            className="text-uppercase"
            placeholder="enter you email..."
            name="search"
          />
          <button type="submit" className="text-uppercase">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
