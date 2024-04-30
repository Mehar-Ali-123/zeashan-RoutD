import { WorkingHourData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface IGraphProps {
  data?: WorkingHourData;
}

const WorkingHourGraph: React.FC<IGraphProps> = ({ data }) => {
  const workingHourOption: ChartOptions<'bar'> = {
    responsive: true,
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
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Hours',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          stepSize: 1,
          callback: (value) => Math.round(Number(value)),
        },
      },
    },
  };
  const workingHourData = {
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
      options={workingHourOption}
      data={workingHourData as ChartData<'bar', number[], string>}
      height={130}
      className="barchart"
      id="chartBar1"
    />
  );
};

export default WorkingHourGraph;
