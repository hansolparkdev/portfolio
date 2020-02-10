/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';

const Main = (props) => (
  <div>
    <About />
    <Skills />
    <Project store={props.store} />
  </div>
);

export default Main;
