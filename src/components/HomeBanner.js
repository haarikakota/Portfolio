import { render } from "@testing-library/react";
import React from "react";

const HomeBanner = () => {
  return (
    <section class="home_banner_area">
      <div class="container box_1620">
        <div class="banner_inner d-flex align-items-center">
          <div class="banner_content">
            <div class="media">
              <div class="d-flex">
                <img src="img/personal.jpg" alt="" />
              </div>
              <div class="media-body">
                <div class="personal_text">
                  <h6>Hello Everybody, i am</h6>
                  <h3>HARIKA KOTA</h3>
                  <h4>Frontend Engineer</h4>
                  <p>
                    Nothing is better than solving complex real-world problems
                    with clean, elegant software. I have a passion to design
                    solutions and solve your problems.
                  </p>
                  <ul class="list basic_info">
                    <li>
                      <a href="#">
                        <i class="lnr lnr-envelope"></i> harikakota@hotmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lnr lnr-home"></i> Evanston, IL
                      </a>
                    </li>
                  </ul>
                  <ul class="list personal_social">
                    <li>
                      <a href="https://github.com/haarikakota" target="_blank">
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/haarikakota" target="_blank">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/haarikakota/"
                        target="_blank"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
