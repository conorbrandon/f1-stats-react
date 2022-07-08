import React, { useCallback } from "react";
import styles from "./GenericBarChart.module.css";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useCurrentPng } from "recharts-to-png";
import { saveAs } from 'file-saver';
import { Link, useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";


const TopOfBarLabel: React.FC<any> = (props) => {
  const { fill, x, y, value, width } = props;
  // console.log({ fill, x, y, value, props });
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
const LinkLabel: React.FC<any> = (props) => {
  console.log({ props });
  const { angle, className, fill, height, index, orientation, payload, stroke, textAnchor, type, verticalAnchor, visibleTicksCount, width, x, y, isDarkMode } = props;
  const { value } = payload;
  return (
  <text textDecoration={'underline'} orientation={orientation} width={width} height={height} type={type} x={x} y={y} stroke={stroke} fill={`${isDarkMode ? 'white' : 'black'}`} font-size={13} transform={`rotate(${angle}, ${x}, ${y})`} className={className} text-anchor={textAnchor}>
    <Link target={'_blank'} rel={'noopener'} to={`/driver/${value.split('?')[1]}`}>
      <tspan x={x} dy=".7em">{value.split('?')[0]}</tspan>
    </Link>
  </text>);
};

export interface GenericBarChartData {
  ID: string,
  points: number
  fillColor: string
};
interface GenericBarChartProps {
  data: GenericBarChartData[],
  chartTitle: string
}

export const GenericBarChart: React.FC<GenericBarChartProps> = ({ data, chartTitle }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
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
    <div style={{ position: 'relative' }}>
      <button onClick={handleDownload} style={{ zIndex: 2, fontSize: '.5rem', position: 'absolute', left: '0%', top: '4%' }}>
        {isLoading ? 'Downloading...' : 'Download Chart'}
      </button>
      <div className="displayFlex flexJustContentCenter">
        <ResponsiveContainer width={'100%'} height={400}>
          <BarChart data={data} margin={{ bottom: 60, top: 50 }} ref={ref}>
            <rect width="100%" height="100%" style={{ fill: `${isDarkMode ? 'var(--dark-background-color)' : 'var(--light-background-color)'}` }} />
            <text x={'50%'} y={30} fill={`${isDarkMode ? 'white': 'black'}`} textAnchor="middle" dominantBaseline="central">
              <tspan fontSize="25">{chartTitle}</tspan>
            </text>
            <Bar dataKey="points" label={<TopOfBarLabel />}>
              {data?.map((_, i) => {
                return <Cell key={_.fillColor + i} fill={_.fillColor}></Cell>
              })}
            </Bar>
            <XAxis tick={<LinkLabel isDarkMode={isDarkMode} />} dataKey="ID" angle={-45} textAnchor='end' interval={0} />
            <YAxis stroke={`${isDarkMode ? 'white' : 'black'}`} />
          </BarChart>
        </ResponsiveContainer>
      </div></div>
  );
};
