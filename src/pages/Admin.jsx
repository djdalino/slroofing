import React, { Component } from "react";
import BlogPost from "../components/Blog/BlogPost";
import { ProductConsumer } from "../stateManagement/context";
class Admin extends Component {
  render() {
    if (localStorage.usertoken) {
      return <BlogPost />;
    } else {
      return (
        <ProductConsumer>
          {(value) => {
            const { onSubmit, email, password, handleInputChange } = value;

            return (
              <main>
                <div className="login-container">
                  <h2 className="text-uppercase text-center mainText">
                    Log in
                  </h2>
                  <form noValidate onSubmit={onSubmit}>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </main>
            );
          }}
        </ProductConsumer>
      );
    }
  }
}

export default Admin;