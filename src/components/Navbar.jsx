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
              <span className="align-middle">Service Information</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Personal Details</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Verify Details</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="countries">
              <i className="align-middle me-2" data-feather="globe"></i>
              <span className="align-middle">Past Questions (Manuel)</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Statement of Results</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Survey</span>
            </a>
          </li>{" "}
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Registration</span>
            </a>
          </li>{" "}
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Fees</span>
            </a>
          </li>{" "}
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Exam Time Table</span>
            </a>
          </li>{" "}
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">FAQ</span>
            </a>
          </li>{" "}
          <li className="sidebar-item">
            <a className="sidebar-link" href="broadcast">
              <i className="align-middle me-2" data-feather="mic"></i>
              <span className="align-middle">Reset Password</span>
            </a>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
