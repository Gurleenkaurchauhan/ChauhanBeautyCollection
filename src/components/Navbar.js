import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";  // ✅ Import Link

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <strong>{props.Home}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.TextAbout}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new">
                  {props.New}
                </Link>
              </li>

              {["Accessories", "Makeup", "Toys", "Gifts"].map((category) => (
                <li className="nav-item dropdown" key={category}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {category}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Claw Clips</a></li>
                    <li><a className="dropdown-item" href="#">Handbags</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              ))}

              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-danger mx-3 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Login/Signup
                </button>
                <form className="dropdown-menu p-4">
                  <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">Remember me</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>

            <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="checkNativeSwitch"
              />
              <label className="form-check-label" htmlFor="checkNativeSwitch">
                {props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  Home: PropTypes.string,
  TextAbout: PropTypes.string,
  New: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};

Navbar.defaultProps = {
  title: "ChauhanBeautyCollection",
  Home: "Home",
  TextAbout: "About",
  New: "New",
  mode: "light",
};
