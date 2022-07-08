import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./ConstructorStandings.module.css";
import { motion } from 'framer-motion';
import { ErgastStandingList } from "../../model/ErgastStandingList";
import { Link, useOutletContext } from "react-router-dom";
import { GenericBarChart, GenericBarChartData } from "../GenericBarChart/GenericBarChart";
import { ErgastConstructorStanding } from "../../model/ErgastConstructorStanding";
import { interpolateRainbow } from "d3-scale-chromatic";
import { AppOutletContext } from "../../App";
import Color from "color";

interface ConstructorStandingsProps {
  constructorStandings?: ErgastStandingList,
  tableLimit?: number,
  isOpenTable?: boolean,
  stickyThead?: boolean
}

export const ConstructorStandings: React.FC<ConstructorStandingsProps> = ({ constructorStandings, tableLimit, isOpenTable, stickyThead }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
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
        let fillColor = constructorStandings.ConstructorStandings ? interpolateRainbow(i / constructorStandings.ConstructorStandings.length) : 'black';
        if (isDarkMode) fillColor = Color(fillColor).lighten(0.1).hex();
        myConstructorStandingsTransformed.push({ 
          ID: `${standing.Constructor.name}?${standing.Constructor.constructorId}`, 
          points: parseFloat(standing.points),
          fillColor
        })
      });
      setConstructorStandingsTransformed(myConstructorStandingsTransformed);
      // console.log({ myConstructorStandingsTransformed: myConstructorStandingsTransformed });
    }
  }, [constructorStandings, dispatch, isDarkMode]);
  return (
    <>{<div style={{ width: '90%' }}>
      {/* chart */}
      {constructorStandings && constructorStandings.ConstructorStandings?.length ? <Collapsible trigger={
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
      </Collapsible> : <></>}
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
            stickyThead={stickyThead}
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
