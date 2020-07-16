import React, { Component } from "react";
import InstituteFront from "./InstituteFront";
import InstituteBack from "./InstituteBack";
import "./Education.css";

class Education extends Component {
  static defaultProps = {
    institutes: [
      {
        schoolName: "Kamal Model Senior Secondary School",
        passingYear: 2013,
        standard: 10,
        marks: 89.3,
      },
      {
        schoolName: "Kamal Model Senior Secondary School",
        passingYear: 2015,
        standard: 12,
        marks: 81.8,
      },
      {
        schoolName: "Maharaja Agrasen Institute of Technology",
        passingYear: 2020,
        standard: "B.Tech",
        marks: 73.68,
      },
    ],
  };
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://tr3.cbsistatic.com/hub/i/r/2020/04/07/1813351a-0675-4189-a80d-e0546f7adc23/resize/1200x900/432effa8e0f1ea3011e8a9433cd2c92d/silicon-valley-hbo-background-1920.jpg"
                class="d-block w-100"
                alt="School"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <InstituteFront class="image" {...this.props.institutes[0]} />
                  <div class="overlay">
                    <InstituteBack class="text" {...this.props.institutes[0]} />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://tr3.cbsistatic.com/hub/i/r/2020/04/07/1813351a-0675-4189-a80d-e0546f7adc23/resize/1200x900/432effa8e0f1ea3011e8a9433cd2c92d/silicon-valley-hbo-background-1920.jpg"
                class="d-block w-100"
                alt="School"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <InstituteFront class="image" {...this.props.institutes[1]} />
                  <div class="overlay">
                    <InstituteBack class="text" {...this.props.institutes[1]} />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://tr3.cbsistatic.com/hub/i/r/2020/04/07/1813351a-0675-4189-a80d-e0546f7adc23/resize/1200x900/432effa8e0f1ea3011e8a9433cd2c92d/silicon-valley-hbo-background-1920.jpg"
                class="d-block w-100"
                alt="School"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <InstituteFront class="image" {...this.props.institutes[2]} />
                  <div class="overlay">
                    <InstituteBack class="text" {...this.props.institutes[2]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Education;
