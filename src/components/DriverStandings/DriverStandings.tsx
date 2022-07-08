import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastDriverStanding } from "../../model/ErgastDriverStanding";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./DriverStandings.module.css";
import { motion } from 'framer-motion';
import { ErgastStandingList } from "../../model/ErgastStandingList";
import { Link, useOutletContext } from "react-router-dom";
import { GenericBarChart, GenericBarChartData } from "../GenericBarChart/GenericBarChart";
import { interpolateRainbow } from "d3-scale-chromatic";
import { AppOutletContext } from "../../App";
import Color from "color";

interface DriverStandingsProps {
  driverStandings?: ErgastStandingList,
  tableLimit?: number,
  isOpenTable?: boolean,
  stickyThead?: boolean
}

export const DriverStandings: React.FC<DriverStandingsProps> = ({ driverStandings, tableLimit, isOpenTable, stickyThead }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const [myIsOpenChart, setMyIsOpenChart] = useState(true);
  const [myIsOpenTable, setMyIsOpenTable] = useState(isOpenTable || false);
  const [driverStandingsTransformed, setDriverStandingsTransformed] = useState<GenericBarChartData[]>();
  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (driverStandings && driverStandings.DriverStandings && driverStandings.DriverStandings.length) {
      const myDriverStandingsTransformed: GenericBarChartData[] = [];
      const constructorIDSet: Set<string> = new Set();
      driverStandings.DriverStandings.forEach(standing => {
        if (!constructorLogos || !constructorLogos[standing.Constructors[0].constructorId]) dispatch(fetchConstructorLogo(standing.Constructors[0]));
        constructorIDSet.add(standing.Constructors[0].constructorId);
      });
      const constructorIDMap: {[id: string]: number} = {};
      Array.from(constructorIDSet).forEach((constructorID, i) => constructorIDMap[constructorID] = i);
      driverStandings.DriverStandings.forEach(standing => {
        let fillColor = interpolateRainbow(constructorIDMap[standing.Constructors[0].constructorId] / constructorIDSet.size);
        if (isDarkMode) fillColor = Color(fillColor).lighten(0.1).hex();
        myDriverStandingsTransformed.push({ 
          ID: `${standing.Driver.familyName}?${standing.Driver.driverId}`, 
          points: parseFloat(standing.points),
          fillColor
        });
      })
      setDriverStandingsTransformed(myDriverStandingsTransformed);
      console.log({ myDriverStandingsTransformed });
    }
  }, [driverStandings, dispatch, isDarkMode]);
  
  return (
    <>{<div style={{ width: '90%' }}>
      {/* chart */}
      {driverStandings && driverStandings.DriverStandings?.length ? 
      <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter collapseTriggerBorder">
          {/* {myIsOpenChart ? 'Collapse' : 'Expand'}  */}
          Driver Standings chart
          <span className="material-icons">{!myIsOpenChart ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenChart}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenChart(!myIsOpenChart); }}
        easing={'ease-in-out'} >
        <GenericBarChart data={driverStandingsTransformed || []} chartTitle={`${driverStandings?.season || ''} Driver Standings (round ${driverStandings?.round || 'n/a'})`} />
      </Collapsible> : <></>}
      {/* table */}
      <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter collapseTriggerBorder">
          {/* {myIsOpenTable ? 'Collapse' : 'Expand'}  */}
          Driver Standings table
          <span className="material-icons">{!myIsOpenTable ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenTable}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenTable(!myIsOpenTable); }}
        easing={'ease-in-out'} >
        <div className="displayFlex flexDirCol flexAlignItemsCenter">
          <SortableTable
            stickyThead={stickyThead}
            items={tableLimit ? driverStandings?.DriverStandings?.slice(0, tableLimit) : driverStandings?.DriverStandings}
            caption={<>Driver Standings <span className="material-icons">leaderboard</span> </>}
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
              Constructor: (standing: ErgastDriverStanding) => SortableTableHelper.transformers.ConstructorRaw(standing.Constructors[0], constructorLogos),
              Points: (standing: ErgastDriverStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'points'),
              Wins: (standing: ErgastDriverStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'wins'),
              Position: SortableTableHelper.transformers.Position
            }}
          />
          {tableLimit !== undefined && <p>
            <Link to={`/${driverStandings?.season}/standings`}>See full Driver standings...</Link>
          </p>}
        </div>
      </Collapsible>
    </div>}</>
  );
};
