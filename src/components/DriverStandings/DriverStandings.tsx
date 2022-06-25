import React, { useCallback, useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastStanding } from "../../model/ErgastStanding";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./DriverStandings.module.css";
import { motion } from 'framer-motion';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useCurrentPng } from "recharts-to-png";
import { saveAs } from 'file-saver';
import { interpolateRainbow } from "d3-scale-chromatic";
import { ErgastStandingList } from "../../model/ErgastStandingList";

const DriverLabel: React.FC<any> = ({ fill, x, y, value, driverID }) => {
  console.log({ fill, x, y, value, driverID });
  return <text
    x={x}
    y={y}
    dy={-5}
    fontSize="14"
    fill={fill}
  >
    {value}
  </text>;
};

interface DriverStandingsProps {
  driverStandings?: ErgastStandingList
}

export const DriverStandings: React.FC<DriverStandingsProps> = ({ driverStandings }) => {
  const [myIsOpenChart, setMyIsOpenChart] = useState(true);
  const [myIsOpenTable, setMyIsOpenTable] = useState(true);
  const [driverStandingsTransformed, setDriverStandingsTransformed] = useState<{
    driverID: string,
    points: number
  }[]>();
  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (driverStandings && driverStandings.DriverStandings.length) {
      const myDriverStandingsTransformed: {
        driverID: string,
        points: number
      }[] = [];
      driverStandings.DriverStandings.forEach(standing => {
        if (!constructorLogos || !constructorLogos[standing.Constructors[0].constructorId]) dispatch(fetchConstructorLogo(standing.Constructors[0]));
        myDriverStandingsTransformed.push({ driverID: `${standing.Driver.familyName}`, points: parseFloat(standing.points) })
      });
      setDriverStandingsTransformed(myDriverStandingsTransformed);
      console.log({ myDriverStandingsTransformed });
    }
  }, [driverStandings, dispatch]);
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    // Verify that png is not undefined
    if (png) {
      // Download with FileSaver
      saveAs(png, `${driverStandings?.season || ''} Driver Standings (after round ${driverStandings?.round || 'n/a'}).png`);
    }
  }, [getPng]);
  return (
    <>{<div style={{ width: '90%' }}>
      {/* chart */}
      {driverStandings && driverStandings.DriverStandings.length && <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
          {myIsOpenChart ? 'Collapse' : 'Expand'} Driver Standings chart
          <span className="material-icons">{!myIsOpenChart ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenChart}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenChart(!myIsOpenChart); }}
        easing={'ease-in-out'} >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ResponsiveContainer width={'90%'} height={500}>
            <BarChart data={driverStandingsTransformed} margin={{ bottom: 50, top: 50 }} ref={ref}>
              <text x={'50%'} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                <tspan fontSize="14">{`${driverStandings.season} Driver Standings (after round ${driverStandings.round})`}</tspan>
              </text>
              <Bar dataKey="points" label={<DriverLabel />}>
                {driverStandingsTransformed?.map((_, i) => {
                  return <Cell fill={interpolateRainbow(i / driverStandingsTransformed.length)}></Cell>
                })}
              </Bar>
              <XAxis dataKey="driverID" angle={-45} textAnchor='end' interval={0} />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Collapsible>}
      {/* table */}
      <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
          {myIsOpenTable ? 'Collapse' : 'Expand'} Driver Standings table
          <span className="material-icons">{!myIsOpenTable ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenTable}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenTable(!myIsOpenTable); }}
        easing={'ease-in-out'} >
        <SortableTable
          items={driverStandings?.DriverStandings}
          caption={'Driver Standings'}
          template={['Position', 'Points', 'Driver', 'Constructor', 'Wins']}
          comparators={{
            Driver: SortableTableHelper.comparators.Driver,
            Constructor: SortableTableHelper.comparators.ConstructorRaw,
            Points: SortableTableHelper.comparators.Points,
            Wins: SortableTableHelper.comparators.Wins,
            Position: SortableTableHelper.comparators.Position
          }}
          transformers={{
            Driver: SortableTableHelper.transformers.Driver,
            Constructor: (standing: ErgastStanding) => SortableTableHelper.transformers.ConstructorRaw(standing.Constructors[0], constructorLogos),
            Points: (standing: ErgastStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'points'),
            Wins: (standing: ErgastStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'wins'),
            Position: SortableTableHelper.transformers.Position
          }}
        />
      </Collapsible>
    </div>}</>
  );
};
