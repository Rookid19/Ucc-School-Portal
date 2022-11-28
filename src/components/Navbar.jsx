import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"
import { Fade } from "react-reveal";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { navRef } = useAuth();
  return (
    <Fade left cascade>
      <nav id="sidebar" className={`sidebar ${navRef}`}>
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
              style={{ width: 70, marginRight: 20, marginLeft: 10 }}
            />
            <h5>Online Students Portal</h5>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a className="sidebar-link" href="siteinformation">
                <i className="align-middle me-2" data-feather="paperclip"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Service Information
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Personal Details
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Verify Details
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="countries">
                <i className="align-middle me-2" data-feather="globe"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Past Questions (Manuel)
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Statement of Results
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Survey
                </span>
              </a>
            </li>{" "}
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Registration
                </span>
              </a>
            </li>{" "}
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Fees
                </span>
              </a>
            </li>{" "}
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Exam Time Table
                </span>
              </a>
            </li>{" "}
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  FAQ
                </span>
              </a>
            </li>{" "}
            <li className="sidebar-item">
              <a className="sidebar-link" href="broadcast">
                <i className="align-middle me-2" data-feather="mic"></i>
                <span className="align-middle" style={{ fontSize: 15 }}>
                  Reset Password
                </span>
              </a>
            </li>{" "}
          </ul>
        </div>
      </nav>
    </Fade>
  );
}

export default Navbar;
