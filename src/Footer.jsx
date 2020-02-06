/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => (
  <div className="footer">
    <h4 className="ir_pm">푸터 컨테이너</h4>
    <div className="email">
      <ul>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <span>ghdcns21@naver.com</span>
        </li>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <span>prod1</span>
        </li>
        <li>
          <i className="fa fa-instagram" aria-hidden="true" />
          <span><a href="#">dev.soli</a></span>
        </li>
        <li>
          <i className="fa fa-github" aria-hidden="true" />
          <span>https://github.com/hansolparkdev</span>
        </li>
      </ul>
    </div>
    <address>
      Copyright ⓒ
      <a href="https://sollife.tistory.com"><strong>https://sollife.tistory.com</strong></a>
      All Rights Reserved.
    </address>
  </div>
);
export default Footer;
