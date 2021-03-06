/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

const Header = () => {
  // console.log(props.id.hits.id);
  // const loginState = props.id.hits.id;
  // const [data, setData] = useState({ uState: props.id.hits.id });
  // console.log('header');
  // <li><Link to={() => { console.log('a'); }}>asdsd</Link></li>
  const [data, setData] = useState({ hits: {} });
  useEffect(() => {
    // console.log(data);
    const fetchData = async () => {
      const result = await axios(
        '/data/session_data',
      );
      setData(result.data);
    };
    fetchData();
  }, [data]);
  // console.log(data.hits.id);
  const logOut = (e) => {
    e.preventDefault();
    axios.post(
      '/logout',
    ).then(() => {
      // console.log(response);
      window.location.href = '/';
    });
  };

  return (
    <div className="header">
      <h4 className="ir_pm">header container</h4>
      <div className="header-menu">
        <ul>
          <li><Link to="/#header">home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#project">Project</Link></li>
          {(() => {
            if (data.hits.id === 'admin') {
              return (
                <li><a href="/logout" onClick={logOut}>logout</a></li>
              );
            }
            return (
              <li><Link to="/login">login</Link></li>
            );
          })()}
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
