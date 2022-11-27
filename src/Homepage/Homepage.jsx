import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Homepage.css";
import { Fade } from "react-reveal";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

function Homepage() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [indexNumber, setIndexNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("Submit");

  // [A-Z]{2}/[A-Z]{3}/[0-9]{2}/[0-9]{4}


  return (
    <main id="main" className="login-body">
      <Fade top cascade>
        <div className="login-headline" style={{ marginTop: 40 }}>
          <img
            src="https://portal.ucc.edu.gh/reset/assets/images/ucc_logo.png"
            className="img-fluid"
          />
          <h3>Online Students' Portal randy</h3>
        </div>
      </Fade>
      <div className="login-container">
        <Fade left cascade>
          <section id="info-section">
            <h4>Announcements &amp; Notifications!</h4>

            <article className="info-normal p-4 m-4">
              <h6>Financial Aid (Student Loan Trust Fund)</h6>
              <p>
                The Students Loan Trust Fund (SLTF) was established in December
                2005 under the Trustee Incorporation Act 1962, Act 820.
              </p>
              <p>
                The objectives of the Trust Fund are to provide financial
                resources for the sound management of the Trust for the benefit
                of students and to help promote and facilitate the national
                ideals enshrined in Article 28 and 38 of the 1992 Constitution.
              </p>
              <p>
                Students who want to apply for financial aid should visit the
                following links to know more about the Trust Fund and its
                application process;
              </p>
              <ul>
                <li>
                  <a href="https://www.sltf.gov.gh/" target="_blank">
                    Student Loan Trust Fund
                  </a>
                </li>
                <li>
                  <a href="financial-aid.pdf" target="_blank">
                    Financial Aid
                  </a>
                </li>
                <li>
                  <a href="sltf-application-requirements.pdf" target="_blank">
                    Financial Aid Application Requirements
                  </a>
                </li>
              </ul>
              <p />
            </article>
          </section>
        </Fade>

        <div className="vertical-line" />
        <Fade right cascade>
          <section id="login-form">
            {/* <form action="../osis/authen.php" method="post" name="form" id="form">
             */}
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
                    placeholder="Registration Number"
                    aria-label="Registration Number"
                    aria-describedby="regno"
                    value={indexNumber}
                    onChange={(text) => setIndexNumber(text.target.value)}
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
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div
                  className="col"
                  onClick={() => signin(indexNumber, password, setLoading)}
                >
                  <a
                    className="btn btn-primary btn-block"
                    style={{ color: "white" }}
                  >
                    {loading}
                  </a>
                </div>
                <div
                  className="col"
                  style={{ alignSelf: "center" }}
                  onClick={() => navigate("/signup")}
                >
                  <a link className="btn btn-link btn-block" href="">
                    Create Account
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
                System support
                <span className="text-danger"> Whatsapp Only</span> MIS office
                on: <strong>0244080587</strong>
              </li>
              {/* <li>System support<span class="text-danger"> Whatsapp Only</span> MIS office on: <strong>0572568591</strong></li> */}
            </ul>
          </section>
        </Fade>
      </div>
      <p className="footer" style={{ marginBottom: 50 }}>
        © University of Cape Coast - Students' Portal
      </p>

      {/* onSubmit={onSignInSubmit} */}
      <form action="" >
        <div id="recaptcha-container"></div>
        <button
          style={{ backgroundColor: "red", marginTop: -20 }}
          // onClick={onSignInSubmit}
          type="submit"
        >
          SMS
        </button>
        <button
          style={{ backgroundColor: "blue", marginTop: -20 }}
          // onClick={verifyOtp}
        >
          Verify
        </button>
      </form>
    </main>
  );
}

export default Homepage;
