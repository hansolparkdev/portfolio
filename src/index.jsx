/* eslint-disable react/prop-types */
/* eslint-disable prefer-object-spread */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch, useParams, Link,
} from 'react-router-dom';
import './css/style.css';
import { createStore } from 'redux';
import axios from 'axios';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
// import Header from './Header.jsx'
// eslint-disable-next-line arrow-body-style

// Reducer
const initialState = {
  value: 0,
};

const INCREMENT = 'INCREMENT';

const counterReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy,
      });
    default:
      return state;
  }
};
/*
 * Store
 */
const store = createStore(counterReducer);

const Header = (props) => {
  console.log('header');
  return (
    <div className="header">
      <h4 className="ir_pm">header container</h4>
      <div className="header-menu">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#skills">Skills</Link></li>
          <li><Link to="#project">Project</Link></li>
          <li><Link to="#contact">Contact</Link></li>
          {(() => {
            if (props.id.hits.id === 'admin') {
              return (
                <li><a href="/login/logout">logout</a></li>
              );
            }
            return (
              <li><a href="/login">login</a></li>
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
const Main = () => (
  <div>
    <About />
    <Skills />
    <Project />
    <Contact store={store} />
  </div>
);
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
const Skills = () => (
  <div id="skills">
    <div className="skills_cont">
      <h1 className="sub_tit"><span>Skills</span></h1>
      <ul>
        <li>
          <img src="img/skills/html5.png" alt="" />
          <span>HTML5</span>
        </li>
        <li>
          <img src="img/skills/css.png" alt="" />
          <span>CSS3</span>
        </li>
        <li>
          <img src="img/skills/js.png" alt="" />
          <span>Javascript</span>
        </li>
        <li>
          <img src="img/skills/jquery.png" alt="" />
          <span>Jquery</span>
        </li>
        <li>
          <img src="img/skills/php.png" alt="" />
          <span>php</span>
        </li>
        <li>
          <img src="img/skills/mysql.png" alt="" />
          <span>MySQL</span>
        </li>
        <li>
          <img src="img/skills/node.png" alt="" />
          <span>NodeJS</span>
        </li>
        <li>
          <img src="img/skills/react.png" alt="" />
          <span>React</span>
        </li>
        <li>
          <img src="img/skills/redux.png" alt="" />
          <span>Redux</span>
        </li>
      </ul>
    </div>
  </div>
);
function Child() {
  const { id } = useParams();

  return (
    <div>
      <h3>
      ID:
        {id}
      </h3>
    </div>
  );
}
const Login = () => {
  const submitBtn = () => {
    // eslint-disable-next-line no-alert
  };
  return (
    <div className="login_form">
      <form action="/login/signin" method="post" onSubmit={submitBtn}>
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
const App = () => {
  const [data, setData] = useState({ hits: {} });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/login/user_data',
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
                <Route path="/project/:id" children={<Child />} />
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

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

store.subscribe(render);
render();
