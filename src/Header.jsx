import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  console.log(props);
  // {(() => {
  //   if (props.id.hits.id === 'admin') {
  //     return (
  //       <li><a href="/logout">logout</a></li>
  //     );
  //   }
  //   return (
  //     <li><Link to="/login">login</Link></li>
  //   );
  // })()}
  // console.log('header');
  return (
    <div className="header">
      <h4 className="ir_pm">header container</h4>
      <div className="header-menu">
        <ul>
          <li><Link to="/#header">home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#project">Project</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
          <li><Link to="/login">login</Link></li>
        </ul>
      </div>
      <div className="header-tit">
        <h1>Professional web developer</h1>
        <br />
        <a href="https://sollife.tistory.com">sollife.tistory.com</a>
      </div>
    </div>
  );
};

export default Header;
