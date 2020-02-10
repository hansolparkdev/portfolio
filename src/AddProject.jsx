/* eslint-disable import/no-unresolved */
import React from 'react';
import './css/AddProject.css';
// import axios from 'axios';

const AddProject = () => (
  <div className="add_project_form">
    <h1>게시물 올리기 페이지</h1>
    <p>
      <input type="text" name="p_title" />
    </p>
    <p>
      <input type="file" name="p_img" />
    </p>
    <p>
      <input type="text" name="p_desc" />
    </p>
    <p>
      <input type="button" value="업로드" />
    </p>
  </div>
);

export default AddProject;
