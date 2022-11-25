import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content">
        <div
          style={{
            marginTop: 40,
            marginBottom: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://portal.ucc.edu.gh/reset/assets/images/ucc_logo.png"
            className="img-fluid"
            style={{ width: 70, marginRight: 20 }}
          />
          <h5>Online Students Portal</h5>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a className="sidebar-link" href="siteinformation">
              <i className="align-middle me-2" data-feather="paperclip"></i>
              <span className="align-middle">Site Information</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="countries">
              <i className="align-middle me-2" data-feather="globe"></i>
              <span className="align-middle">Countries</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Broadcast</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
