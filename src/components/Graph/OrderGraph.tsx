import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';
import { OrdersData } from '@/infrastructure/store/api/dashboard/dashboard-types';

interface IGraphProps {
  data?: OrdersData;
}

const OrderGraph: React.FC<IGraphProps> = ({ data }) => {
  const ordersOptions: ChartOptions<'bar'> = {
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
      },
    },
  };

  type DataSetColorPropType = Record<string, string>;

  const datasetColor: DataSetColorPropType = {
    'Total Orders': 'rgb(6, 130, 139)',
    'Delivered Orders': 'RGB(0, 128, 0)',
    'Failed Orders': 'RGB(255, 0, 0)',
    'Cancelled Orders': 'rgb(0, 0, 0)',
    'Unfulfilled Orders': 'rgb(139, 156, 180)',
  };
  const ordersData = {
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
      options={ordersOptions}
      data={ordersData as ChartData<'bar', number[], string>}
      height={130}
      className="barchart"
      id="chartBar1"
    />
  );
};

export default OrderGraph;
