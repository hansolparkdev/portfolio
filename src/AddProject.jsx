/* eslint-disable import/no-unresolved */
import React from 'react';
import './css/AddProject.css';

const AddProject = () => (
  <div>
    <h1>게시물 올리기 페이지</h1>
    <input type="text" name="p_title" />
    <input type="file" name="p_img" />
    <input type="text" name="p_desc" />
    <input type="button" />
  </div>
);
export default AddProject;
