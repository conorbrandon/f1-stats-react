import React, { useCallback } from "react";
import styles from "./GenericBarChart.module.css";
import { interpolateRainbow } from "d3-scale-chromatic";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useCurrentPng } from "recharts-to-png";
import { saveAs } from 'file-saver';


const CustomLabel: React.FC<any> = (props) => {
  const { fill, x, y, value, width } = props;
  console.log({ fill, x, y, value, props });
  return <text
    x={x + (width / 2)}
    y={y}
    dy={-5}
    fontSize="14"
    fill={fill}
    textAnchor='middle'
  >
    {value}
  </text>;
};

export interface GenericBarChartData {
  driverID: string,
  points: number
};
interface GenericBarChartProps {
  data: GenericBarChartData[],
  chartTitle: string
}

export const GenericBarChart: React.FC<GenericBarChartProps> = ({ data, chartTitle }) => {
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    // Verify that png is not undefined
    if (png) {
      // Download with FileSaver
      saveAs(png, `${chartTitle}.png`);
    }
  }, [getPng]);
  return (
    <div className="displayFlex flexJustContentCenter">
      <ResponsiveContainer width={'90%'} height={400}>
        <BarChart data={data} margin={{ bottom: 50, top: 50 }} ref={ref}>
          <text x={'50%'} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="25">{chartTitle}</tspan>
          </text>
          <Bar dataKey="points" label={<CustomLabel />}>
            {data?.map((_, i) => {
              return <Cell fill={interpolateRainbow(i / data.length)}></Cell>
            })}
          </Bar>
          <XAxis dataKey="driverID" angle={-45} textAnchor='end' interval={0} />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
