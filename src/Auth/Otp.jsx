import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { userInfo } = useAuth();

  let mobile = "+233" + userInfo[0]?.phone;
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("recaptach resolved");
          //   onSignInSubmit();
        },
      },
      auth
    );
  };

  const onSignInSubmit = (event) => {
    // event.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+233" + userInfo[0]?.data?.phone;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(
          "confirmationResult ----> " + JSON.stringify(confirmationResult)
        );
      })
      .catch((error) => {
        alert(error);
        navigate("/");
        // console.log("Invalid Otp verification code");
        // Error; SMS not sent
        // ...
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const code = otp;
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // // ...
        // alert("Successully signed in");
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("Wrong verification code");
        navigate("/");
        // alert("wrong otp");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <main id="main" className="login-body">
      <div className="login-headline" style={{ marginTop: 40 }}>
        <img
          src="https://portal.ucc.edu.gh/reset/assets/images/ucc_logo.png"
          className="img-fluid"
        />
        <h3>Online Students' Portal </h3>
      </div>
      <div className="login-container">
        <div className="vertical-line" />
        <section id="login-form">
          <form method="post" name="form" id="form" style={{ marginTop: 50 }}>
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
                  required="fsdf"
                  placeholder="Enter your otp number"
                  maxLength={6}
                  value={otp}
                  onChange={(event) =>
                    setOtp(event.target.value.replace(/\D/g, ""))
                  }
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col">
                <a
                  className="btn btn-primary btn-block"
                  defaultValue="Create Account"
                  style={{ color: "white" }}
                  onClick={onSignInSubmit}
                >
                  Get Otp
                </a>
              </div>
              <div className="col">
                <a
                  className="btn btn-primary btn-block"
                  defaultValue="Create Account"
                  style={{ color: "white" }}
                  onClick={verifyOtp}
                >
                  Verify Otp
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
        <div id="recaptcha-container"></div>
      </div>
      <p className="footer" style={{ marginBottom: 50 }}>
        © University of Cape Coast - Students' Portal
      </p>
    </main>
  );
}

export default OTP;
