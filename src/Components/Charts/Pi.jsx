// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({incomeData, expenseData}) => {

  const income = incomeData.monthly_income || 50;
  const saving =  income - expenseData.total_exp || 50;
  // console.log(income, saving);
  const data = {
    labels: ['Saving', 'Expense'],
    datasets: [
      {
        label: 'Amount (INR)',
        data: [saving, income],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
        borderColor: '#6B7280',
        borderWidth: 2,
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
        title: {
          display: true,
          text: 'Expense Vs Saving:',
          color: '#4B5563',
          font: {
            size: 24,
            family: 'Arial, sans-serif', // Optionally specify a font family
            weight: 'bold',       // Makes the title bold like an h2
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
