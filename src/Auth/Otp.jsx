import React, { useState } from "react";

function OTP() {
  const [otp, setOtp] = useState("");

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
                  // onClick={() =>
                  //   signup(indexNumber, password, phone, setLoading)
                  // }
                  // disabled={validation}
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
      </div>
      <p className="footer" style={{ marginBottom: 50 }}>
        © University of Cape Coast - Students' Portal
      </p>
    </main>
  );
}

export default OTP;
