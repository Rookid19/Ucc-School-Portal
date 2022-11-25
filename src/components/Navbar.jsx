import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"

function Navbar() {
   return (
      <nav id="sidebar" className="sidebar">
         {/* <a className="sidebar-brand" href="index.html">
            <img
               src={logo}
               width={130}
            />
         </a> */}
         <div className="sidebar-content">
            <div className="sidebar-user">
               <div className="fw-bold">Linda Miller</div>
               <small>Administrator</small>
            </div>

            <ul className="sidebar-nav">
               <li className="sidebar-header">Main</li>
               <li className="sidebar-item active">
                  <a
                     data-bs-target="#dashboards"
                     data-bs-toggle="collapse"
                     className="sidebar-link"
                  >
                     <i className="align-middle me-2" data-feather="home"></i>
                     <span className="align-middle">Currencies</span>
                  </a>
                  <ul
                     id="dashboards"
                     className="sidebar-dropdown list-unstyled collapse show"
                     data-bs-parent="#sidebar"
                  >
                     <li className="sidebar-item active">
                        <Link className="sidebar-link" to="/currency?cur=BTC">
                           Bitcoin
                        </Link>
                     </li>
                     <li className="sidebar-item">
                        <Link className="sidebar-link" to="/currency?cur=LTE">
                           Litecoin
                        </Link>
                     </li>
                     <li className="sidebar-item">
                        <Link className="sidebar-link" to="/currency?cur=DODGE">
                           Dogecoin
                        </Link>
                     </li>
                     <li className="sidebar-item">
                        <Link className="sidebar-link" to="/currency?cur=BCH">
                           Bitcoin Cash
                        </Link>
                     </li>
                  </ul>
               </li>
               <li className="sidebar-item">
                  <a
                     data-bs-target="#pages"
                     data-bs-toggle="collapse"
                     className="sidebar-link collapsed"
                  >
                     <i className="align-middle me-2" data-feather="users"></i>
                     <span className="align-middle">Users</span>
                  </a>
                  <ul
                     id="pages"
                     className="sidebar-dropdown list-unstyled collapse "
                     data-bs-parent="#sidebar"
                  >
                     <li className="sidebar-item">
                        <Link
                           className="sidebar-link"
                           to={{
                              pathname: "/registeredusers",
                              state: { data: "Registered Users" },
                           }}
                        >
                           Registered Users
                        </Link>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="verifiedusers">
                           Verified Users
                           <span className="sidebar-badge badge rounded-pill bg-primary">
                              New
                           </span>
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="rejectedkycusers">
                           Rejected KYC Users
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="bannedusers">
                           Hold
                        </a>
                     </li>
                  </ul>
               </li>
               <li className="sidebar-item">
                  <a
                     data-bs-target="#auth"
                     data-bs-toggle="collapse"
                     className="sidebar-link collapsed"
                  >
                     <i className="align-middle me-2" data-feather="layers"></i>
                     <span className="align-middle">Manual Approvals</span>
                  </a>
                  <ul
                     id="auth"
                     className="sidebar-dropdown list-unstyled collapse "
                     data-bs-parent="#sidebar"
                  >
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="kyc">
                           KYC
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="withdrawals">
                           Withdrawals
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="topups">
                           TopUps
                        </a>
                     </li>
                  </ul>
               </li>

               {/* <li className="sidebar-header">Tansactions</li> */}
               <li className="sidebar-item">
                  <a
                     data-bs-target="#ui"
                     data-bs-toggle="collapse"
                     className="sidebar-link collapsed"
                  >
                     <i
                        className="align-middle me-2"
                        data-feather="dollar-sign"
                     ></i>
                     <span className="align-middle">Transactions</span>
                  </a>
                  <ul
                     id="ui"
                     className="sidebar-dropdown list-unstyled collapse "
                     data-bs-parent="#sidebar"
                  >
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="/crypto">
                           Crypto
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="momowithdrawal">
                           Momo withdrawal
                        </a>
                     </li>

                     <li className="sidebar-item">
                        <a className="sidebar-link" href="momodeposit">
                           Momo Deposit
                        </a>
                     </li>
                  </ul>
               </li>

               <li className="sidebar-item">
                  <a className="sidebar-link" href="siteinformation">
                     <i
                        className="align-middle me-2"
                        data-feather="paperclip"
                     ></i>
                     <span className="align-middle">Site Information</span>
                  </a>
               </li>

               <li className="sidebar-item">
                  <a
                     data-bs-target="#datatables"
                     data-bs-toggle="collapse"
                     className="sidebar-link collapsed"
                  >
                     <i className="align-middle me-2" data-feather="shield"></i>
                     <span className="align-middle">Admin</span>
                  </a>
                  <ul
                     id="datatables"
                     className="sidebar-dropdown list-unstyled collapse "
                     data-bs-parent="#sidebar"
                  >
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="createadmin">
                           Create Admin
                        </a>
                     </li>
                     <li className="sidebar-item">
                        <a className="sidebar-link" href="admindata">
                           Admin Data
                        </a>
                     </li>
                  </ul>
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
