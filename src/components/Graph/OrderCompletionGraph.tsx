import { OrderCompletionData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';

interface IGraphProps {
  data?: OrderCompletionData;
}

const OrderCompletionGraph: React.FC<IGraphProps> = ({ data }) => {
  const orderCompletionOption: ChartOptions<'bar'> = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
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
          text: 'Number of Orders',
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
    Orders: 'rgba(5, 207, 171, 1)',
    'Complete Orders': 'rgba(8, 165, 136, 1)',
    'Orders with missing items': 'rgb(255, 0, 0)',
  };

  const orderCompletionData = {
    type: 'bar',
    labels: data?.labels,
    datasets:
      data?.datasets?.map((d) => {
        const { label } = d;
        return {
          ...d,
          backgroundColor: datasetColor[label] || '#000000',
        };
      }) ?? [],
  };
  return (
    <Bar
      options={orderCompletionOption}
      data={orderCompletionData as ChartData<'bar', number[], string>}
      height={130}
      className="barchart"
      id="chartBar5"
    />
  );
};

export default OrderCompletionGraph;
