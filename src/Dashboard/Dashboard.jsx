import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import { Fade } from "react-reveal";

function Dashboard() {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.length == 0) {
      navigate("/");
    }
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Navbar />

      <Fade right cascade>
        <div className="container" style={{ flex: 0.9 }}>
          <Header />
          <div className="container">
            <div className="jumbotron">
              <h2 className="text-danger">
                {" "}
                Re-opening of the University for the 2021/2022 Academic Year
              </h2>
              <p className="lead">
                All fresh and continuing students of the University of Cape
                Coast and the general public are to take note of the following
                arrangements for the re-opening of the University for the
                2021/2022 Academic Year.
              </p>
              <p className="lead">
                Please find details of re-opening arrangements below: <br />
                <br />
                <a
                  href="../downloads/Resumption-202122-sem1.pdf"
                  className="btn btn-primary btn-small"
                  target="_blank"
                  style={{ marginRight: 15 }}
                >
                  Resumption
                </a>
                <a
                  href="../downloads/Revised-calendar-202122-sem1.pdf"
                  className="btn btn-primary btn-small"
                  target="_blank"
                >
                  Revised Calendar
                </a>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="jumbotron">
              <h2>Student Engagement Survey</h2>
              <p className="lead">
                UCC ranks 1st globally in research influence. As a student, your
                academic success is our focus.
                <br />
                Visit the link below and share your experiences in a 15 minutes
                anonymous survey.
              </p>
              <p className="lead">
                To access your statment of results and your registration link,
                please click on ANSWER SURVEY in the navigation bar.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="jumbotron">
              <h4 className="text-danger">
                {" "}
                2021/2022 SRC/L.NUGS/GRASAG/JCRC ELECTIONS
              </h4>
              <p className="lead">
                <br />
                Please find below the link for the demonstration of the use of
                the software for the <br />
                2021/2022 SRC/L.NUGS/GRASAG/JCRC elections
                <a href="https://youtu.be/YyegFscBtm8" target="_blank">
                  {" "}
                  Click Here{" "}
                </a>
              </p>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="container">
            <div className="jumbotron">
              <h2>New Survey</h2>
              <p className="lead">
                <br />
                Dear Student,
                <br />
                As part of making the University of Cape Coast an
                Entrepreneurial University, <br />
                we are carrying out a research on the extent to which our
                academic programmes and activities <br />
                incorporate the 21st century skills. We would need your support
                for a couple of minutes in answering the questions.
                <br />
                <br />
                Kindly take the survey by clicking the button below..
              </p>
              <hr className="my-4" />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSccFM02twEaxfsqdlejpiln1sFO-ngkG_GTMUvc3Wp1nej_JQ/viewform?fbzx=8474862031584581619"
                className="btn btn-large btn-primary p-3"
                target="new"
              >
                Take Me To The Survey
              </a>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="container">
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    RE-OPENING ARRANGEMENTS FOR 2020/2021 SECOND SEMESTER
                    (REGULAR AND DISTANCE){" "}
                  </h6>
                  <section className="card-text text-muted">
                    Please find details of re-opening arrangements in
                    <a
                      href="../downloads/reopening-notice.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      this document
                    </a>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    SUPSPENSION OF ORGANIZATIONAL ATTACHEMENT TRANING FOR
                    STUDENTS
                  </h6>
                  <section className="card-text text-muted">
                    Students should refer to{" "}
                    <a href="../downloads/123.pdf" target="_blank">
                      this document
                    </a>
                    for more information
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    Institutional Email Activation
                  </h6>
                  <section className="card-text text-muted">
                    The university encourages us to make extensive use of our
                    institutional emails especially for academic correspondence.
                    In view of this, institutional emails have been generated
                    for students to enable them access the university’s
                    e-learning platform. To see your institutional email
                    <a
                      href="activation2.php"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger">
                    NOTICE ACCOMMODATION ARRANGEMENTS FOR RE-OPENING OF THE
                    UNIVERSITY FOR LEVEL 100 STUDENTS TO COMPLETE THE SECOND
                    SEMESTER OF THE 2019/2020 ACADEMIC YEAR{" "}
                  </h6>
                  <section className="card-text text-muted">
                    Further to the earlier notice on resumption of academic work
                    issued by Management on 20th August, 2020 towards the
                    reopening of the University of Cape Coast on Tuesday, 1st
                    September, 2020, all Level 100 students are to take note of
                    the following accommodation arrangements:{" "}
                    <a
                      href="../manuals/pdf/acc.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                    <br />
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    REVISED CALENDAR (SECOND SEMESTER, 2019/2020) FOR THE RETURN
                    OF LEVELS 100, 200 AND 300 STUDENTS TO COMPLETE THE
                    2019/2020 ACADEMIC YEAR
                  </h6>
                  <section className="card-text text-muted">
                    Members of the University community and the general public
                    are hereby informed that the University will re-open on
                    Tuesday 1st September, 2020 to enable levels 100, 200 and
                    300 undergraduate students to come to campus to write end of
                    second semester examinations for the 2019/2020 academic
                    year. The detailed calendar is as follows:{" "}
                    <a
                      href="../manuals/pdf/not.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                    <br />
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    Timetable: Trailed Papers For L400 Students{" "}
                  </h6>
                  <section className="card-text text-muted">
                    <a
                      href="../downloads/referrals.docx"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Download Schedule Here
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    Institutional Email , UCC Wifi and EDUROAM Activation
                  </h6>
                  <section className="card-text text-muted">
                    The university encourages us to make extensive use of our
                    institutional emails especially for academic correspondence.
                    In view of this, institutional emails have been generated
                    for students to enable them access the university’s
                    e-learning platform.
                    <a
                      href="activation.php"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    {" "}
                    E-Learning Activation (Sandwich students only)
                  </h6>
                  <section className="card-text text-muted">
                    Sandwich students should refer to{" "}
                    <a
                      href="../downloads/ucc_elearning_login_manual.pdf"
                      target="_blank"
                    >
                      this document
                    </a>
                    for information on how to log on to the e-learning platform
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    OFFER OF FREE ACCOMMODATION IN UNIVERSITY HALLS OF RESIDENCE
                    AND RELATED MATTERS
                  </h6>
                  <section className="card-text text-muted">
                    Management wishes to remind final year students living
                    outside campus that its offer of free accommodation to them
                    remains open{" "}
                    <a
                      href="../manuals/pdf/NOTICE.docx"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                    <br />
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    Covid-19 Counselling Call-in
                  </h6>
                  <section className="card-text text-muted">
                    In the wake of the COVID-19 pandemic and its associated
                    social distancing protocols, the Counselling Centre deems it
                    necessary to initiate a mobile phone call-in counselling
                    mode for students of UCC.
                    <a
                      href="../downloads/counselling_call_in_ucc.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    BET-GHANA BUSINESS PLAN COMPETITION
                  </h6>
                  <section className="card-text text-muted">
                    Are you a students of the Universty of Cape Coast? Do you
                    have business idea in the food processing and consumer Goods
                    Industy?{" "}
                    <a
                      href="../manuals/pdf/BET.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                    <br />
                    <a
                      href="../manuals/pdf/temp.docx"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for template
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    Zero-rated Sites
                  </h6>
                  <section className="card-text text-muted">
                    As part of the efforts to facilitate online teaching and
                    learning, Management of the University of Cape Coast has,
                    with support from Government, agreed with the two major
                    telecommunication networks in Ghana ({" "}
                    <span className="text-warning">MTN</span> and{" "}
                    <span className="text-danger">Vodafone</span> ) on the{" "}
                    <b>zero-rating</b> of some university websites{" "}
                    <a
                      href="../manuals/pdf/zero-rated.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    Scholarship Secretariat
                  </h6>
                  <section className="card-text text-muted">
                    Ghana scholarship secretariat has launched an online
                    application portal for students interested in scholarship
                    opportunities to register. The deadline for the application
                    is <b>15th May, 2020</b>.{" "}
                    <a
                      href="https://www.scholarshipgh.com"
                      target="_blank"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    E-Learning Instructions
                  </h6>
                  <section className="card-text text-muted">
                    For the purposes of continous teaching and learning
                    activities, it has been the mandate of the University to
                    deploy immediately an online platform for support teaching
                    and learning activities even in this COVID-19 era.{" "}
                    <a
                      href="elearning.php"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here to get instructions and help on how to access
                      the platform.
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    Resumption of Academic Work For 2nd Semester of the
                    2019/2020 Academic Year
                  </h6>
                  <section className="card-text text-muted">
                    At an Emergency Meeting held yesterday, Wednesday, 8th
                    April, 2020, the Executive Committee of the Academic Board
                    agreed on the following calendar for the resumption and
                    completion of academic work for the second semester of the
                    2019/2020 academic year which was suspended from Monday,
                    16th March, 2020{" "}
                    <a
                      href="../manuals/pdf/notice.pdf"
                      target="content"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pl-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    Brighter Investment
                  </h6>
                  <section className="card-text text-muted">
                    Brighter Investment provides financial support by paying for
                    your tuition, hostel fees and monthly allowance.
                    <a
                      href="http://www.brighterinvestment.com/students"
                      target="_blank"
                      className="btn btn-link btn-sm"
                    >
                      Click here for more details
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-3 invisible">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    E-Learning
                  </h6>
                  <section className="card-text text-muted"></section>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-3 invisible">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-danger text-uppercase">
                    RE-SIT NOTICE
                  </h6>
                  <h6 className="card-subtitle text-info text-uppercase mb-3">
                    SECOND SUPPLEMENTARY (RE-SIT) EXAMINATION (2018/2019
                    ACADEMIC YEAR) FOR LEVEL 100 STUDENTS
                  </h6>
                  <section className="card-text text-muted">
                    <p>
                      The Second Supplementary (Re-Sit) Examination for Level
                      100 courses is scheduled to take place from Monday, 16th
                      September to Friday, 20th September, 2019.
                    </p>
                    <p>
                      The examination is for Level 100 students who failed the
                      First Supplementary (Re-Sit) Examination which was
                      conducted from Monday, 19th August to Friday, 23rd August,
                      2019 and those who did not avail themselves for the first
                      examination.
                    </p>
                    <p>
                      The affected students are to pay the re-sit fee of Fifty
                      Ghana Cedis (GH¢50.00) per a paper at the Cash Office from
                      Monday, 2nd September, 2019 and send the receipt to Room
                      DF3 at Directorate of Finance for endorsement and
                      registration. The deadline for registration is Thursday,
                      12th September, 2019. Students are advised to check their
                      results and have all ICs rectified promptly.
                    </p>
                    <p>
                      Students are entreated to confirm the registration in
                      their portals. Students who fail to register will not be
                      permitted to take the examinations.
                    </p>
                    DIRECTOR (ACADEMIC AFFAIRS).
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Dashboard;
