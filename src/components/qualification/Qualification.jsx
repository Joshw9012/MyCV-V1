import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };

  return (
    <section className="qualification section">
      <h2 className="section__title">My journey ...</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        {/* <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div> */}

        <div className="qualification__sections">
          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Front-end Developer</h3>
              <span className="qualification__subtitle">CPA</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                Cert IV & Deploma in Programmming
              </h3>
              <span className="qualification__subtitle">Tafe NSW</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2024
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">CPA certified</h3>
              <span className="qualification__subtitle">CPA</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">System Accountant</h3>
              <span className="qualification__subtitle">Resimac Ltd</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2018 - 2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
            </div>

            <div>
              <h3 className="qualification__title">Bachelor</h3>
              <span className="qualification__subtitle">
                Victoria University
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2017
              </div>
            </div>
          </div>

          {/* <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Microsoft - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple Inc - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
