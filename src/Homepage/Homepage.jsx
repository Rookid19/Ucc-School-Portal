import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <div className="box">
        <div className="annoucement">
          <section id="info-section">
            <h4>Announcements &amp; Notifications!</h4>

            <article class="info-importants">
              <h6>Lecturers & Courses Assessment</h6>
              <p>
                Online appraisal of lecturers and courses for the 2019/2020
                second semester start on{" "}
                <span class="important">10/09/2020 to 31/09/2020</span>.
              </p>
              <p>
                All sandwich students should take note and partake in the
                exercise to aid the continuous improvement of teaching and
                learning as well as good service rendering.
              </p>
            </article>

            <article class="info-normal p-4 m-4">
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
              <p></p>
            </article>
          </section>
        </div>
        <div className="login-box">4444</div>
      </div>
    </div>
  );
}

export default Homepage;
