import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-theme">
      <a className="sidebar-toggle d-flex me-2">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown ms-lg-2">
            <a
              className="nav-link dropdown-toggle position-relative"
              href="#"
              id="userDropdown"
              data-bs-toggle="dropdown"
              style={{ color: "red" }}
            >
              <i className="align-middle fas fa-cog"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/">
                <i className="align-middle me-1 fas fa-fw fa-arrow-alt-circle-right"></i>
                Sign out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
