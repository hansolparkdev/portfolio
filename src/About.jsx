import React from 'react';

const About = () => (
  <div id="about">
    <div className="about_left_cont">
      <h1 className="sub_tit"><span>About Me</span></h1>
      <ul>
        <li>
          <i className="fa fa-user" aria-hidden="true" />
          <span>박한솔 / 1990년 (31세) / 남</span>
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" />
          <span>010-4422-6082</span>
        </li>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <span>ghdcns211@gmail.com</span>
        </li>
        <li>
          <i className="fa fa-address-card-o" aria-hidden="true" />
          <span>부산시 북구 금곡대로 470번길 33 (유림 1차 아파트) 512호</span>
        </li>
      </ul>
    </div>
    <div className="about_right_cont">
      <img src="img/profile.png" alt="" width="100%" />
    </div>
  </div>
);

export default About;
