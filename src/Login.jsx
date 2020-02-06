/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {
  console.log('login');
  const [dataa, setDataa] = useState({ hits: {} });
  useEffect(() => {
    const fetchDataa = async () => {
      const result = await axios(
        '/data/session_data',
      );
      setDataa(result.data);
    };
    fetchDataa();
  }, []);
  // console.log(data.hits.id);
  if (dataa.hits.id !== undefined) {
    props.history.push('/');
  }
  const submitBtn = () => {
    // eslint-disable-next-line no-alert
  };
  return (
    <div className="login_form">
      <form action="/signin" method="post" onSubmit={submitBtn}>
        <p>ADMIN Login</p>
        <input type="text" id="uid" name="uid" />
        <br />
        <input type="password" id="upw" name="upw" />
        <br />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default Login;
