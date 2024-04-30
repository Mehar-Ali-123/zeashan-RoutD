import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';
import { MileageData } from '@/infrastructure/store/api/dashboard/dashboard-types';

interface IGraphProps {
  data?: MileageData;
}

const MilageGraph: React.FC<IGraphProps> = ({ data }) => {
  const mileageOption: ChartOptions<'bar'> = {
    indexAxis: 'x',
    responsive: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Miles',
          font: {
            size: 14,

            weight: 'bold',
          },
        },
      },
    },
  };
  const mileageData = {
    type: 'bar',
    labels: data?.labels,
    datasets:
      data?.datasets.map((d) => {
        return {
          ...d,
          backgroundColor: 'rgba(28, 78, 255, 1)',
        };
      }) ?? [],
  };
  return (
    <Bar
      options={mileageOption}
      data={mileageData as ChartData<'bar', number[], string>}
      height={130}
      className="barchart"
      id="chartBar5"
    />
  );
};

export default MilageGraph;
