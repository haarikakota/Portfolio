import React from "react";

const Footer = () => {
  return (
    <footer class="footer_area p_120">
      <div class="container">
        <div class="row footer_inner">
          <div class="col-lg-5 col-sm-6">
            <aside class="f_widget ab_widget">
              <div class="f_title">
                <h3>About Me</h3>
              </div>
              <p>I have four years of experience as a front-end developer.</p>
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is inspired from Colorlib
              </p>
            </aside>
          </div>
          <div class="col-lg-5 col-sm-6"></div>
          <div class="col-lg-2">
            <aside class="f_widget social_widget">
              <div class="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <ul class="list">
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
                    href="https://www.linkedin.com/in/haarikakota"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
