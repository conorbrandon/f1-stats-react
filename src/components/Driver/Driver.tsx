import React from "react";
import { useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { setNewDriverResults, fetchDriver, selectDriver, selectDriverError, selectDriverResults, selectDriverSeasons, selectDriverStatus } from "../../app/driver/driverSlice";
import { useAppSelector } from "../../app/hooks";
import { EntityProfile } from "../EntityProfile/EntityProfile";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Driver.module.css";

export const Driver = ({ }) => {
  const { driverID } = useParams();
  const driver = useAppSelector(selectDriver);
  const driverSeasons = useAppSelector(selectDriverSeasons);
  const driverResults = useAppSelector(selectDriverResults);
  const driverStatus = useAppSelector(selectDriverStatus);
  const driverError = useAppSelector(selectDriverError);

  const driverHeaderContent = <>{driver &&
    <span>
      <span className="xx-large-font">
        {driver.givenName} {driver.familyName}
      </span>
      <span className="large-font" style={{ marginLeft: '5px' }}>
        {driver.permanentNumber && <>(#{driver.permanentNumber})</>}
        {driver.code && <>({driver.code})</>}
      </span>
    </span>}
  </>;
  return (
    <>
      <div className="page-header displayFlex flexJustContentCenter">
        <UseReduxAsyncStatus status={driverStatus} successContent={driverHeaderContent} error={driverError} fetchAction={fetchDriver} fetchParams={driverID || ''} />
      </div>
      <EntityProfile 
        entity={driver} 
        entityID={driverID} 
        entitySeasons={driverSeasons} 
        entityResults={driverResults}
        ergastResultsFn={ErgastAPI.getDriverResults}
        setNewResultsReducerAction={setNewDriverResults} />
    </>
  );
};
