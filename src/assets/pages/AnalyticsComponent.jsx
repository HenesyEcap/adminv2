import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const AnalyticsComponent = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/analytics');
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Error fetching analytics data: ', error);
    }
  };

  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'], // Replace with your desired labels
    datasets: [
      {
        label: 'Passenger Count',
        data: [10, 20, 15], // Replace with your desired data
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Analytics</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default AnalyticsComponent;
