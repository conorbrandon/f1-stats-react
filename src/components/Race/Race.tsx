import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { TimeHelper } from "../../helpers/TimeHelper";
import { ErgastDriver } from "../../model/ErgastDriver";
import { ErgastLap } from "../../model/ErgastLap";
import { ErgastRace } from "../../model/ErgastRace";
import { RaceHeader } from "../RaceHeader/RaceHeader";
import { DriverIDSet, lapTime } from "../RaceLapTimes/RaceLapTimes";
import { interpolateRainbow } from 'd3-scale-chromatic';
import styles from "./Race.module.css";

export interface RaceOutletContext {
  race?: ErgastRace,
  year: string,
  round: string,
  raceQualifying: ErgastRace,
  drivers: ErgastDriver[],
  driverIDSetSimple: string[],
  lapTimes: lapTime[],
  driverIDSet: DriverIDSet,
  scaleDomain: ScaleDomain,
  setDriverIDSet: React.Dispatch<React.SetStateAction<DriverIDSet>>,
  positionTrace: lapTime[]
}
interface ScaleDomain { min: number, max: number };

function shuffle(array: any[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const Race = ({ }) => {
  const { year, round } = useParams();
  const [race, setRace] = useState<ErgastRace>();
  const [raceQualifying, setRaceQualifying] = useState<ErgastRace>();
  const [drivers, setDrivers] = useState<ErgastDriver[]>();
  const [driverIDSetSimple, setDriverIDSetSimple] = useState<string[]>();
  const [lapTimes, setLapTimes] = useState<lapTime[]>();
  const [driverIDSet, setDriverIDSet] = useState<DriverIDSet>([]);
  const [scaleDomain, setScaleDomain] = useState<ScaleDomain>();
  const [positionTrace, setPositionTrace] = useState<lapTime[]>();

  useEffect(() => {
    ErgastAPI.getRaceResult(year || '', round || '')
      .then(response => setRace(response))
      .catch(error => console.log("couldn't fetch race result", error));
  }, [race]);
  useEffect(() => {
    ErgastAPI.getRaceQualifying(year || '', round || '')
      .then(response => setRaceQualifying(response))
      .catch(error => console.log("can't get qualifyingResult", error));
  }, [raceQualifying]);
  useEffect(() => {
    ErgastAPI.getDriversByYear(year || '')
      .then(response => {
        setDrivers(response);
        setDriverIDSetSimple(Array.from(new Set(response.map(driver => driver.driverId))))
      })
      .catch(error => console.log("can't get drivers", error));
  }, [drivers]);
  useEffect(() => {
    if (raceQualifying) {
      ErgastAPI.getLapTimes(year || '', round || '')
        .then(response => {
          // console.log({ response });
          let driverIDSet: DriverIDSet = [];
          const numDrivers = (response.Laps as ErgastLap[])[0].Timings.length;
          const randomColorIndexSet: number[] = shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
          // console.log({randomColorIndexSet});
          (response.Laps as ErgastLap[])[0].Timings.forEach((timing, _i) => {
            driverIDSet.push({
              driverID: timing.driverId,
              isSelected: true,
              driverColor: interpolateRainbow(randomColorIndexSet[_i] / numDrivers),
              value: timing.driverId,
              label: timing.driverId
            });
          });
          // console.log({ driverIDSet });
          let minLapTime = Infinity; 
          let maxLapTime = -Infinity;
          let transformedLaps: lapTime[] = (response.Laps as ErgastLap[]).map((lap, lapNum) => {
            let driverIDLapMap: lapTime = { lapNum: lapNum + 1 };
            lap.Timings.forEach(timing => {
              const lapTime = TimeHelper.raceTimeToMs(timing.time);
              driverIDLapMap[timing.driverId] = lapTime;
              if (lapTime > maxLapTime) maxLapTime = lapTime;
              if (lapTime < minLapTime) minLapTime = lapTime;
            });
            return driverIDLapMap;
          });
          let transformedPositions: lapTime[] = (response.Laps as ErgastLap[]).map((lap, lapNum) => {
            let driverIDPositionMap: lapTime = { lapNum: lapNum + 1 };
            lap.Timings.forEach(timing => {
              driverIDPositionMap[timing.driverId] = parseInt(timing.position);
            });
            return driverIDPositionMap;
          });
          let lap0Position: lapTime = { lapNum: 0 };
          console.log({ raceQualifying });
          raceQualifying?.QualifyingResults?.forEach(result => {
            lap0Position[result.Driver.driverId] = parseInt(result.position);
            console.log({ lap0Position });
          })
          transformedPositions.unshift(lap0Position);
          setScaleDomain({ min: minLapTime, max: maxLapTime });
          // console.log({ transformedLaps, transformedPositions });
          setLapTimes(transformedLaps);
          setPositionTrace(transformedPositions);
          setDriverIDSet(driverIDSet);
        })
        .catch(error => console.log("couldn't fetch lap times", error));
    }
  }, [raceQualifying]);

  return (
    <>
      <RaceHeader race={race} />
      <Outlet context={{ year, round, race, raceQualifying, drivers, driverIDSetSimple, driverIDSet, lapTimes, scaleDomain, setDriverIDSet, positionTrace }} />
    </>
  );
};
