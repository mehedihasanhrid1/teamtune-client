import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const labels = data.map((payment) => payment.payment_for);
      const receivedAmounts = data.map((payment) => payment.recevied);

      const barColors = [
        'rgba(255, 99, 132, 1)',  
        'rgba(54, 162, 235, 1)',   
        'rgba(255, 206, 86, 1)',   
        'rgba(75, 192, 192, 1)',   
        'rgba(153, 102, 255, 1)',  
        'rgba(255, 159, 64, 1)',   
        'rgba(0, 128, 0, 1)',      
        'rgba(255, 0, 255, 1)',   
        'rgba(0, 255, 255, 1)',    
        'rgba(128, 0, 128, 1)',    
      ];

      chartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Received Amount",
              data: receivedAmounts,
              backgroundColor: barColors,
              borderColor: barColors,
              borderWidth: 1,
            },
          ],
        },
        options: {
            scales: {
              x: {
                ticks: {
                  color: '#78909c', 
                }
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#78909c',
                }
              }
            },
            plugins: {
                legend: {
                  labels: {
                    color: '#78909c',
                  },
                },
              },

          }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width="500" height="250"></canvas>
    </div>
  );
};

export default BarChart;
