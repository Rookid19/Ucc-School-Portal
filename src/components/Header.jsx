import React from "react";
import useAuth from "../hooks/useAuth";

function Header() {
  const { userInfo, signout, setNavRef, navRef } = useAuth();

  return (
    <nav className="navbar navbar-expand navbar-theme">
      <a
        className="sidebar-toggle d-flex me-2"
        onClick={() => (navRef == "" ? setNavRef("toggled") : setNavRef(""))}
      >
        <i
          style={{ color: "red", fontSize: 25 }}
          className="align-middle fas fa-bars"
        ></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown ms-lg-2">
            <a
              className="nav-link dropdown-toggle position-relative"
              href="#"
              id="userDropdown"
              data-bs-toggle="dropdown"
              style={{ color: "black" }}
            >
              {userInfo[0]?.data?.indexNumber}
              <i
                style={{ color: "red", marginLeft: 10 ,fontSize: 18}}
                className="align-middle fas fa-cog"
              ></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
              onClick={signout}
            >
              <a className="dropdown-item">
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
