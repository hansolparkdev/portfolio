import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/projectinfo.css';

import axios from 'axios';

const Child = () => {
  const [data, setData] = useState({ data: [] });

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/data/getProject?id=${id}`,
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="project_info">
      {data.data.map((item) => (
        <div key={item.seq}>
          <h1>{item.p_title}</h1>
          <img src={item.p_img} alt={item.p_title} />
          <span>{item.p_desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Child;
