/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Dataset, DriverVehicleData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import { ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface ILineGraphProps {
  data?: DriverVehicleData;
}

const LineGraph: React.FC<ILineGraphProps> = ({ data }) => {
  const driverVehicleOption = {
    type: 'line',
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
        grid: {
          display: false, // Set to false to hide y-axis grid lines
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantity',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
        },
      },
    },
    ticks: {
      stepSize: 1,
      callback: (value: number) => Math.round(Number(value)),
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
    pointBackgroundColor: '#fff',
    radius: 10,
    interaction: {
      intersect: false,
    },
  };

  type DataSetLabelPropType = Record<
    string,
    {
      fillColor: string;
      pointStyle: string;
      pointFillColor: string;
    }
  >;
  const graphEntityName: DataSetLabelPropType = {
    Drivers: { fillColor: 'rgba(28, 78, 255, 1)', pointStyle: 'rect', pointFillColor: 'rgba(28, 78, 255, .6)' },
    Vehicles: { fillColor: 'rgba(255, 179, 63, 1)', pointStyle: 'rectRot', pointFillColor: 'rgba(255, 179, 63, .6)' },
  };
  const driverVehicleData = {
    labels: data?.labels,
    datasets:
      data?.datasets?.map((d: Dataset) => {
        const { label } = d;
        return {
          ...d,
          //In progress
          // data: d.data.map((dataValue, index, list) => {
          //   const lastIndex = list.length - 1
          //   if (index < lastIndex) {
          //     if (dataValue === 0 && list[index + 1] === 0) {
          //       return undefined
          //     }
          //   }
          //   else if (index === lastIndex && dataValue === 0) {
          //     return undefined
          //   }
          //   return dataValue
          // }),
          borderColor: graphEntityName[label].fillColor || '#000000',
          pointStyle: graphEntityName[label].pointStyle || 'circle',
          pointBackgroundColor: graphEntityName[label].pointFillColor || '#000000',
          pointRadius: 5,
          pointHoverRadius: 8,
          tension: 0.4,
        };
      }) ?? [],
  };
  return (
    <Line
      id="chartArea1"
      height={130}
      className="barchart"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options={driverVehicleOption as any}
      data={driverVehicleData as ChartData<'line', number[], string>}
    />
  );
};

export default LineGraph;
