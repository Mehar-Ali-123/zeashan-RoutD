import React from 'react';
import { TemperatureData } from '@/infrastructure/store/api/dashboard/dashboard-types';
import { Pie } from 'react-chartjs-2';
interface IGraphProps {
  data?: TemperatureData;
}

const TemperatureDataGraph: React.FC<IGraphProps> = ({ data }) => {
  const labels = {
    ['Frozen']: 'rgb(139, 156, 180)',
    ['Chilled']: 'RGB(0, 128, 0)',
    ['Ambient']: 'rgba(72, 12, 168, 1)',
    ['Hot']: 'RGB(255, 0, 0)',
  };
  const maplabels = Object.keys(labels);

  const temperatureData = {
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
      <Pie data={temperatureData} id="chartPie" className="chartjs-render-monitor" />
    </React.Fragment>
  );
};

export default TemperatureDataGraph;
