import React from 'react';
import { Bar } from '@ant-design/plots';

const CategoryChart = ({ data }) => {
  const config = {
    data,
    xField: 'value',
    yField: 'category',
    seriesField: 'category',
    legend: false,
    color: '#4caf50',
  };

  return <Bar {...config} />;
};

export default CategoryChart;
