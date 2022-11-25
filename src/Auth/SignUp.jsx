import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate()
  return (
    <main id="main" className="login-body">
      <div className="login-headline" style={{ marginTop: 40 }}>
        <img
          src="https://portal.ucc.edu.gh/reset/assets/images/ucc_logo.png"
          className="img-fluid"
        />
        <h3>Online Students' Portal</h3>
      </div>
      <div className="login-container">
        <div className="vertical-line" />
        <section id="login-form">
          <form method="post" name="form" id="form">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="regno">
                    <i className="fas fa-user-graduate fa-lg fa-fw" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  required=""
                  placeholder="Email"
                  aria-label="Registration Number"
                  aria-describedby="regno"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="passcode">
                    <i className="fas fa-key fa-lg fa-fw" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required=""
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="passcode">
                    <i className="fas fa-key fa-lg fa-fw" />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="Phone"
                  required=""
                  placeholder="Phone number"
                  aria-label="Password"
                  aria-describedby="password"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col">
                <input
                    // name="login"
                //   type="submit"
                  className="btn btn-primary btn-block"
                  defaultValue="Create Account"
                />
              </div>
              <div
                className="col"
                style={{ alignSelf: "center" }}
                onClick={() => navigate("/")}
              >
                <a link className="btn btn-link btn-block" href="">
                  Sign In
                </a>
              </div>
            </div>
          </form>
          <hr className="mb-4 mt-4 mr-4 ml-4" />
          <p className="mb-5">&nbsp;</p>
          <h6 className="mb-2" style={{ fontWeight: 700 }}>
            Helplines (Working hours 08:00 - 18:00)
          </h6>
          <ul>
            <li>Main UCC Accounts office : 0508118646</li>
            <li>
              Fees enquiries{" "}
              <span className="text-danger">(CoDe Students only)</span> call:{" "}
              <br /> <strong>033-2092-044 / 033-2092-050</strong>
            </li>
            <li>
              System support call MIS office on:{" "}
              <strong>054-5802-062 or 0545801203 </strong>
            </li>
            <li>
              System support<span className="text-danger"> Whatsapp Only</span>{" "}
              MIS office on: <strong>0244080587</strong>
            </li>
            {/* <li>System support<span class="text-danger"> Whatsapp Only</span> MIS office on: <strong>0572568591</strong></li> */}
          </ul>
        </section>
      </div>
      <p className="footer" style={{ marginBottom: 50 }}>
        © University of Cape Coast - Students' Portal
      </p>
    </main>
  );
}

export default SignUp;
