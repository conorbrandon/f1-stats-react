import React, { useCallback, useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastStanding } from "../../model/ErgastStanding";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./DriverStandings.module.css";
import { motion } from 'framer-motion';
import { ErgastStandingList } from "../../model/ErgastStandingList";
import { Link } from "react-router-dom";
import { GenericBarChart, GenericBarChartData } from "../GenericBarChart/GenericBarChart";

interface DriverStandingsProps {
  driverStandings?: ErgastStandingList,
  tableLimit?: number
}

export const DriverStandings: React.FC<DriverStandingsProps> = ({ driverStandings, tableLimit }) => {
  const [myIsOpenChart, setMyIsOpenChart] = useState(true);
  const [myIsOpenTable, setMyIsOpenTable] = useState(false);
  const [driverStandingsTransformed, setDriverStandingsTransformed] = useState<GenericBarChartData[]>();
  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (driverStandings && driverStandings.DriverStandings.length) {
      const myDriverStandingsTransformed: GenericBarChartData[] = [];
      driverStandings.DriverStandings.forEach(standing => {
        if (!constructorLogos || !constructorLogos[standing.Constructors[0].constructorId]) dispatch(fetchConstructorLogo(standing.Constructors[0]));
        myDriverStandingsTransformed.push({ driverID: `${standing.Driver.familyName}`, points: parseFloat(standing.points) })
      });
      setDriverStandingsTransformed(myDriverStandingsTransformed);
      console.log({ myDriverStandingsTransformed });
    }
  }, [driverStandings, dispatch]);
  
  return (
    <>{<div style={{ width: '90%' }}>
      {/* chart */}
      {driverStandings && driverStandings.DriverStandings.length && <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter">
          {myIsOpenChart ? 'Collapse' : 'Expand'} Driver Standings chart
          <span className="material-icons">{!myIsOpenChart ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenChart}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenChart(!myIsOpenChart); }}
        easing={'ease-in-out'} >
        <GenericBarChart data={driverStandingsTransformed || []} chartTitle={`${driverStandings?.season || ''} Driver Standings (after round ${driverStandings?.round || 'n/a'})`} />
      </Collapsible>}
      {/* table */}
      <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter">
          {myIsOpenTable ? 'Collapse' : 'Expand'} Driver Standings table
          <span className="material-icons">{!myIsOpenTable ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenTable}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenTable(!myIsOpenTable); }}
        easing={'ease-in-out'} >
        <div className="displayFlex flexDirCol flexAlignItemsCenter">
          <SortableTable
            items={tableLimit ? driverStandings?.DriverStandings.slice(0, tableLimit) : driverStandings?.DriverStandings}
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
              Constructor: (standing: ErgastStanding) => SortableTableHelper.transformers.ConstructorRaw(standing.Constructors[0], constructorLogos),
              Points: (standing: ErgastStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'points'),
              Wins: (standing: ErgastStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'wins'),
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
