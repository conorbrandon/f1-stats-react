import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastDriverStanding } from "../../model/ErgastDriverStanding";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./ConstructorStandings.module.css";
import { motion } from 'framer-motion';
import { ErgastStandingList } from "../../model/ErgastStandingList";
import { Link } from "react-router-dom";
import { GenericBarChart, GenericBarChartData } from "../GenericBarChart/GenericBarChart";
import { ErgastConstructorStanding } from "../../model/ErgastConstructorStanding";
import { interpolateRainbow } from "d3-scale-chromatic";

interface ConstructorStandingsProps {
  constructorStandings?: ErgastStandingList,
  tableLimit?: number,
  isOpenTable?: boolean
}

export const ConstructorStandings: React.FC<ConstructorStandingsProps> = ({ constructorStandings, tableLimit, isOpenTable }) => {
  const [myIsOpenChart, setMyIsOpenChart] = useState(true);
  const [myIsOpenTable, setMyIsOpenTable] = useState(isOpenTable || false);
  const [constructorStandingsTransformed, setConstructorStandingsTransformed] = useState<GenericBarChartData[]>();
  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (constructorStandings && constructorStandings.ConstructorStandings && constructorStandings.ConstructorStandings.length) {
      const myConstructorStandingsTransformed: GenericBarChartData[] = [];
      constructorStandings.ConstructorStandings.forEach((standing, i) => {
        if (!constructorLogos || !constructorLogos[standing.Constructor.constructorId]) dispatch(fetchConstructorLogo(standing.Constructor));
        myConstructorStandingsTransformed.push({ 
          ID: `${standing.Constructor.name}`, 
          points: parseFloat(standing.points),
          fillColor: constructorStandings.ConstructorStandings ? interpolateRainbow(i / constructorStandings.ConstructorStandings.length) : 'black'
        })
      });
      setConstructorStandingsTransformed(myConstructorStandingsTransformed);
      // console.log({ myConstructorStandingsTransformed: myConstructorStandingsTransformed });
    }
  }, [constructorStandings, dispatch]);
  return (
    <>{<div style={{ width: '90%' }}>
      {/* chart */}
      {constructorStandings && constructorStandings.ConstructorStandings?.length && <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter collapseTriggerBorder">
          {/* {myIsOpenChart ? 'Collapse' : 'Expand'}  */}
          Constructor Standings chart
          <span className="material-icons">{!myIsOpenChart ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenChart}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenChart(!myIsOpenChart); }}
        easing={'ease-in-out'} >
        <GenericBarChart data={constructorStandingsTransformed || []} chartTitle={`${constructorStandings?.season || ''} Constructor Standings (round ${constructorStandings?.round || 'n/a'})`} />
      </Collapsible>}
      {/* table */}
      <Collapsible trigger={
        <motion.span whileHover={{ scale: 1.05 }} className="displayFlex flexJustContentCenter flexAlignItemsCenter collapseTriggerBorder">
          {/* {myIsOpenTable ? 'Collapse' : 'Expand'}  */}
          Constructor Standings table
          <span className="material-icons">{!myIsOpenTable ? 'expand_more' : 'expand_less'}</span>
        </motion.span>
      } open={myIsOpenTable}
        transitionTime={500}
        handleTriggerClick={() => { setMyIsOpenTable(!myIsOpenTable); }}
        easing={'ease-in-out'} >
        <div className="displayFlex flexDirCol flexAlignItemsCenter">
          <SortableTable
            items={tableLimit ? constructorStandings?.ConstructorStandings?.slice(0, tableLimit) : constructorStandings?.ConstructorStandings}
            caption={<>Constructor Standings <span className="material-icons">leaderboard</span> </>}
            template={['Position', 'Points', 'Constructor', 'Wins']}
            comparators={{
              Constructor: SortableTableHelper.comparators.ConstructorRaw,
              Points: SortableTableHelper.comparators.Points,
              Wins: SortableTableHelper.comparators.Wins,
              Position: SortableTableHelper.comparators.Position
            }}
            transformers={{
              Constructor: (standing: ErgastConstructorStanding) => SortableTableHelper.transformers.ConstructorRaw(standing.Constructor, constructorLogos),
              Points: (standing: ErgastConstructorStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'points'),
              Wins: (standing: ErgastConstructorStanding) => SortableTableHelper.transformers.RawFromDeepValue(standing, 'wins'),
              Position: SortableTableHelper.transformers.Position
            }}
          />
          {tableLimit !== undefined && <p>
            <Link to={`/${constructorStandings?.season}/standings`}>See full Constructor standings...</Link>
          </p>}
        </div>
      </Collapsible>
    </div>}</>
  );
};
