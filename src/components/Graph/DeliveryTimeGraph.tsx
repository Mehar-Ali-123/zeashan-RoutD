import React from 'react';
import { DeliveryTimeData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import { Doughnut } from 'react-chartjs-2';
interface IGraphProps {
  data?: DeliveryTimeData;
}

const DeliveryTimeGraph: React.FC<IGraphProps> = ({ data }) => {
  const labels = {
    ['Early']: 'rgba(33, 199, 6, 1)',
    ['On Time']: 'rgba(28, 78, 255, 1)',
    ['Late']: 'rgba(255, 179, 63, 1)',
    ['Cancelled']: 'rgba(143, 73, 255, 1)',
  };

  const maplabels = Object.keys(labels);

  const deliveryTimeData = {
    hoverOffset: 4,
    labels: maplabels,
    datasets: [
      {
        data: Array.from(maplabels, (label) => data?.datasets[data?.labels.indexOf(label)]),
        backgroundColor: Object.values(labels),
      },
    ],
  };
  return (
    <React.Fragment>
      {data?.datasets?.every((d: number) => d === 0) && <p className="hz-vt-center">Data not found</p>}
      <Doughnut data={deliveryTimeData} id="chartDonut" className="chartjs-render-monitor" />
    </React.Fragment>
  );
};

export default DeliveryTimeGraph;
