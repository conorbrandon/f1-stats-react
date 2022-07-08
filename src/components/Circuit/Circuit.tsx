import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getCircuitQualifying, getCircuitResults } from "../../api/ErgastAPI/CircuitAPI";
import { AppOutletContext } from "../../App";
import { fetchCircuit, selectCircuit, selectCircuitError, selectCircuitImgLink, selectCircuitQualifying, selectCircuitResults, selectCircuitSeasons, selectCircuitStatus, setNewCircuitQualifying, setNewCircuitResults } from "../../app/circuit/circuitSlice";
import { useAppSelector } from "../../app/hooks";
import { EntityProfile } from "../EntityProfile/EntityProfile";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Circuit.module.css";

export const Circuit = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const { circuitID } = useParams();
  const circuit = useAppSelector(selectCircuit);
  const circuitSeasons = useAppSelector(selectCircuitSeasons);
  const circuitResults = useAppSelector(selectCircuitResults);
  const circuitQualifying = useAppSelector(selectCircuitQualifying);
  const circuitImgLink = useAppSelector(selectCircuitImgLink);
  const circuitStatus = useAppSelector(selectCircuitStatus);
  const circuitError = useAppSelector(selectCircuitError);

  const circuitHeaderContent = <>{circuit &&
    <span>
      <span className="xx-large-font">
        {circuit.circuitName}
      </span>
    </span>}
  </>;
  return (
    <>
      <div className={`page-header ${isDarkMode ? 'dark' : 'light'} displayFlex flexJustContentCenter`}>
        <UseReduxAsyncStatus status={circuitStatus} successContent={circuitHeaderContent} error={circuitError} fetchAction={fetchCircuit} fetchParams={circuitID || ''} />
      </div>
      <EntityProfile
        isCircuitProfile
        circuitImgLink={circuitImgLink}
        entity={circuit}
        entityID={circuitID}
        entitySeasons={circuitSeasons}
        entityResults={circuitResults}
        ergastResultsFn={getCircuitResults}
        setNewResultsReducerAction={setNewCircuitResults}
        entityQualifying={circuitQualifying}
        ergastQualifyingFn={getCircuitQualifying}
        setNewQualifyingReducerAction={setNewCircuitQualifying} />
    </>
  );
};
