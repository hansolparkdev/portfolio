/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [data, setData] = useState({ hits: {} });
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idInput = useRef(null);
  const pwInput = useRef(null);
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
  const submitBtn = (e) => {
    e.preventDefault();
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
      idInput.current.value = '';
      pwInput.current.value = '';
      idInput.current.focus();
    });
  };
  return (
    <div className="login_form">
      <form onSubmit={submitBtn}>
        <p>ADMIN Login</p>
        <input type="text" ref={idInput} id="uid" name="uid" placeholder="id" onChange={(e) => setId(e.target.value)} />
        <br />
        <input type="password" ref={pwInput} id="upw" name="upw" placeholder="password" autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default Login;
