import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';
import { SafetyCheckData } from '@/infrastructure/store/api/dashboard/dashboard-types';

interface IGraphProps {
  data?: SafetyCheckData;
}

const SafetyCheckGraph: React.FC<IGraphProps> = ({ data }) => {
  const safetyCheckOption: ChartOptions<'bar'> = {
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
          text: 'Number of Checks',
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
  type DataSetColorPropType = Record<string, string>;

  const datasetColor: DataSetColorPropType = {
    'Vehicles with Faults': 'RGB(255, 165, 0)',
    'Vehicles with Minor Faults': 'rgba(28, 78, 255, 1)',
    'Vehicles with Major Faults': 'RGB(255, 0, 0)',
  };
  const safetyCheckData = {
    type: 'bar',
    labels: data?.labels,
    datasets:
      data?.datasets.map((d) => {
        const { label } = d;
        return {
          ...d,
          backgroundColor: datasetColor[label],
        };
      }) ?? [],
  };
  return (
    <Bar
      options={safetyCheckOption}
      data={safetyCheckData as ChartData<'bar', number[], string>}
      height={130}
      className="barchart"
      id="chartBar1"
    />
  );
};

export default SafetyCheckGraph;
