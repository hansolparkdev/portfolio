/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [data, setData] = useState({ hits: {} });
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/data/session_data',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  // console.log(data.hits.id);
  if (data.hits.id !== undefined) {
    props.history.push('/');
  }
  const submitBtn = () => {
    // eslint-disable-next-line no-alert
    axios.post(
      '/signin',
      {
        uid: id,
        upw: password,
      },
    ).then((response) => {
      // console.log(response);
      if (response.data.id === 'admin') {
        props.history.push('/');
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="login_form">
      <p>ADMIN Login</p>
      <input type="text" id="uid" name="uid" onChange={(e) => setId(e.target.value)} />
      <br />
      <input type="password" id="upw" name="upw" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="button" value="로그인" onClick={submitBtn} />
    </div>
  );
};

export default Login;
