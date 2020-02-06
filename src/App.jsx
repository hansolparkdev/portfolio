/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import './css/style.css';
import axios from 'axios';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Login from './Login.jsx';
import Child from './Child.jsx';
import Footer from './Footer.jsx';

const App = () => {
  console.log('app');
  const [data, setData] = useState({ hits: {} });
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/data/session_data',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <Router>
      <div id="wrap">
        <div id="header">
          <div className="container">
            <Header id={data} />
          </div>
        </div>
        <div id="nav">
          <div className="container">
            <div className="nav">
              <h2>&quot;도전적이고 열정적인 나는 웹 개발자다&quot;</h2>
            </div>
          </div>
        </div>
        <div id="contents">
          <div className="container">
            <div className="main_contents">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/:id" component={Child} />
                <Route path="/main" component={Main} />
                <Route path="/" component={Main} />
              </Switch>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
