import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({plannedExpense, actualExpense}) => {
  // this is planned data ... p stands for planned...
  const fixedP = plannedExpense.fixed_exp || 50;
  const foodP = plannedExpense.food_exp || 50;
  const transportP = plannedExpense.transport_exp || 50;
  const healthcareP = plannedExpense.healthcare_exp || 50;
  const entertainmentP = plannedExpense.entertainment_exp || 50;
  const shoppingP = plannedExpense.shopping_exp || 50;
  const totalP = plannedExpense.total || 50;

  // this is currect expense data.. c stands for current..
  const fixedC = actualExpense.fixed_exp || 50;
  const foodC = actualExpense.food_exp || 50;
  const transportC = actualExpense.transport_exp || 50;
  const healthcareC = actualExpense.healthcare_exp || 50;
  const entertainmentC = actualExpense.entertainment_exp || 50;
  const shoppingC = actualExpense.shopping_exp || 50;
  const totalC = actualExpense.total || 50;


  const data = {
    labels: ['Fixed', 'Food', 'Transport', 'Healthcare', 'Entertainment', 'Shopping'],
    datasets: [
      {
        label: 'Target',
        data: [fixedP, foodP, transportP, healthcareP, entertainmentP, shoppingP],  // Example target values
        backgroundColor: '#36A2EB',            // Blue color for target
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
      {
        label: 'Current Progress',
        data: [fixedC, foodC, transportC, healthcareC, entertainmentC, shoppingC],  // Example current progress values
        backgroundColor: '#FF6384',            // Red color for current progress
        borderColor: '#FF6384',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#6B7280',    // Gray-500 for legend labels
        },
      },
      title: {
        display: true,
        text: 'Expense Categories: Target vs Current Progress',
        color: '#4B5563',       // Dark gray color for the title (Gray-700)
        font: {
          size: 24,             // Font size to mimic h2 (24px)
          family: 'Arial, sans-serif', // Optionally specify a font family
          weight: 'bold',       // Makes the title bold like an h2
        },
      },
    },
    scales: {
      x: {
        stacked: false,        // Ensures the bars are side-by-side (not stacked on top of each other)
        ticks: {
          color: '#6B7280',    // Gray-500 for X axis labels
        },
      },
      y: {
        stacked: false,        // Ensures independent y-axis scaling for each bar
        ticks: {
          beginAtZero: true,
          color: '#6B7280',    // Gray-500 for Y axis labels
        },
      },
    },
  };

  return (
    <div className="chart-container" >
      <Bar data={data} options={options} height={500} />
    </div>
  );
};

export default BarChart;
