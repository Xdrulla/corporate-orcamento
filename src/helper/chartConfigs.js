
export const pieConfig = (data) => ({
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
  label: {
    content: '{name} {percentage}',
  },
});

export const lineConfig = (data) => ({
  data,
  xField: 'month',
  yField: 'average',
  smooth: true,
  label: {
    style: {
      fill: '#ffffff',
    },
  },
  lineStyle: {
    stroke: '#4caf50',
    lineWidth: 2,
  },
  point: {
    size: 5,
    shape: 'circle',
    style: {
      fill: 'white',
      stroke: '#4caf50',
      lineWidth: 2,
    },
  },
  yAxis: {
    label: {
      style: {
        fill: '#ffffff',
      },
    },
  },
  xAxis: {
    label: {
      style: {
        fill: '#ffffff',
      },
    },
  },
});

export const balance = 1500;
export const goal = 5000;
export const currentSavings = 1500;
export const monthlyBudgetData = [
  { month: 'Setembro', average: 3000 },
  { month: 'Outubro', average: 3200 },
  { month: 'Novembro', average: 2800 },
];
