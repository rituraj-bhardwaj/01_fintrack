// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({categoryData}) => {
  // this data is planned data...
  const fixed = categoryData.fixed_exp || 50;
  const food = categoryData.food_exp || 50;
  const transport = categoryData.transport_exp || 50;
  const healthcare = categoryData.healthcare_exp || 50;
  const entertainment = categoryData.entertainment_exp || 50;
  const shopping = categoryData.shopping_exp || 50;
  const total = categoryData.total || 50;

  const data = {
    labels: ['Fixed', 'Food', 'Transport', 'Healthcare', 'Entertainment', 'Shopping'],
    datasets: [
      {
        label: 'Planned Expense',
        data: [fixed, food, transport, healthcare, entertainment, shopping],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        borderColor: '#6B7280',
        borderWidth: 2,
        cutout: '70%',  // This makes it a donut chart
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: '#8D7F7F', // Gray color for legend labels (gray-500)
        },
        // title: {
        //   display: true,
        //   text: 'Expense Categories:',
        //   color: '#4B5563',
        //   font: {
        //     size: 24,
        //     family: 'Arial, sans-serif', // Optionally specify a font family
        //     weight: 'bold',       // Makes the title bold like an h2
        //   },
        // },
      },
    },
  };

  return <Doughnut data={data} options={options}/>;
};

export default DonutChart;
