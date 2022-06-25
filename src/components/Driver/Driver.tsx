import React from "react";
import { useParams } from "react-router-dom";
import { fetchDriver, selectDriver, selectDriverError, selectDriverStatus } from "../../app/driver/driverSlice";
import { useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Driver.module.css";

export const Driver = ({ }) => {
  const { driverID } = useParams();
  const driver = useAppSelector(selectDriver);
  const driverStatus = useAppSelector(selectDriverStatus);
  const driverError = useAppSelector(selectDriverError);
  console.log({ driverID, driverStatus });
  const driverHeaderContent = driver ?
      <span>
        <span className="xx-large-font">
          {driver.givenName} {driver.familyName}
        </span>
        <span className="large-font" style={{ marginLeft: '5px' }}>
          (#{driver.permanentNumber})
        </span>
      </span> 
      : <></>;
  const driverBodyContent = driver ? <>
    <div>Nationality: {driver.nationality}</div>
    <img src={FlagHelper.getFlagFromDenonym(driver.nationality)} alt={`${driver.nationality} flag`} />
    <div>Date of birth: {new Date(driver.dateOfBirth).toLocaleDateString()}</div>
    <div><a href={driver.url} target="_blank">Wikipedia</a></div>
  </> : <></>;
  return (
    <>
      <div className="page-header">
        <UseReduxAsyncStatus status={driverStatus} successContent={driverHeaderContent} error={driverError} fetchAction={fetchDriver} fetchParams={driverID || ''} />
      </div>
      <div className="page-content padded">
      <UseReduxAsyncStatus status={driverStatus} successContent={driverBodyContent} error={driverError} fetchAction={fetchDriver} fetchParams={driverID || ''} />
        </div>
    </>
  );
};
