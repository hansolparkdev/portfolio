/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import './css/style.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Login from './Login.jsx';
import Child from './Child.jsx';
import Footer from './Footer.jsx';
import AddProject from './AddProject.jsx';

const App = (props) => {
  console.log('app');
  return (
    <Router>
      <div id="wrap">
        <div id="header">
          <div className="container">
            <Header />
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
                <Route path="/main" component={() => <Main store={props.store} />} />
                <Route path="/addProject" component={AddProject} />
                <Route path="/:id" component={Child} />
                <Route path="/" component={() => <Main store={props.store} />} />
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
