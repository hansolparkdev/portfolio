/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '@babel/polyfill';

const Project = () => {
  const [data, setData] = useState({ hits: [] });
  const [user, setUser] = useState({ hits: {} });
  useEffect(() => {
    // console.log(data);
    const fetchData = async () => {
      const result = await axios(
        '/data/session_data',
      );
      setUser(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/data/getProjectList',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  const style = {
    float: 'right',
    backgroundColor: '#003755',
    padding: '15px',
    color: 'white',
    borderRadius: '5px',
  };

  return (
    <div id="project">
      <div className="project">
        <h1 className="sub_tit"><span>project</span></h1>
        {(() => {
          if (user.hits.id === 'admin') {
            return (
              <Link to="/addProject">
                <h1 style={style}><span>게시물 올리기</span></h1>
              </Link>
            );
          }
        })()}
        <ul>
          {data.hits.map((item) => (
            <li key={item.seq}>
              <Link to={`/${item.seq}`}>
                <img src={item.p_img} alt={item.p_title} />
                <strong>{item.p_title}</strong>
                <span>{item.p_desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
