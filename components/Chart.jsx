import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartSales = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/generate_data');
        const data = await response.json();

        const salesData = data.map(({ sales }) => sales);
        const netProfitData = data.map(({ net_profit }) => net_profit);
        const expensesData = data.map(({ expenses }) => expenses);
        const dates = data.map(({ date }) => date);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Expenses',
              data: expensesData,
              fill: false,
              borderColor: 'red',
              tension: 0.1,
            },
            {
              label: 'Net Profit',
              data: netProfitData,
              fill: false,
              borderColor: 'blue',
              tension: 0.1,
            },
            {
              label: 'Sales',
              data: salesData,
              fill: false,
              borderColor: 'green',
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartSales;
