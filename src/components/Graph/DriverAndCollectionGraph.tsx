import { DeliveriesAndCollectionsData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import React from 'react';
import { Pie } from 'react-chartjs-2';
interface IGraphProps {
  data?: DeliveriesAndCollectionsData;
}

const DriverAndCollectionGraph: React.FC<IGraphProps> = ({ data }) => {
  const deliveriesAndCollectionsData = {
    hoverOffset: 4,
    labels: data?.labels,
    datasets: [
      {
        data: data?.datasets,
        backgroundColor: ['rgba(72, 12, 168, 1)', 'rgba(143, 73, 255, 1)'],
      },
    ],
  };
  return (
    <React.Fragment>
      {data?.datasets?.every((d: number) => d === 0) && <p className="hz-vt-center">Data not found</p>}
      <Pie data={deliveriesAndCollectionsData} id="chartPie" className="chartjs-render-monitor" />
    </React.Fragment>
  );
};

export default DriverAndCollectionGraph;
