import { CustomerRatingData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import React from 'react';
import { Pie } from 'react-chartjs-2';
interface IGraphProps {
  data?: CustomerRatingData;
}

const CustomerRatingGraph: React.FC<IGraphProps> = ({ data }) => {
  const customerRatingData = {
    hoverOffset: 4,
    labels: data?.labels,
    datasets: [
      {
        data: data?.datasets,
        backgroundColor: [
          'RGB(255, 0, 0)',
          'rgb(254, 106, 53)',
          'RGB(255, 165, 0)',
          'rgba(72, 12, 168, 1)',
          'RGB(0, 128, 0)',
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      {data?.datasets?.every((d: number) => d === 0) && <p className="hz-vt-center">Data not found</p>}
      <Pie data={customerRatingData} id="chartPie" className="chartjs-render-monitor" />
    </React.Fragment>
  );
};

export default CustomerRatingGraph;
