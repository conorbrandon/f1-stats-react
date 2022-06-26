import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDriver, selectDriver, selectDriverError, selectDriverSeasons, selectDriverStatus } from "../../app/driver/driverSlice";
import { useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Driver.module.css";

export const Driver = ({ }) => {
  const { driverID } = useParams();
  const driver = useAppSelector(selectDriver);
  const driverSeasons = useAppSelector(selectDriverSeasons);
  const driverStatus = useAppSelector(selectDriverStatus);
  const driverError = useAppSelector(selectDriverError);
  const driverHeaderContent = <>{driver &&
    <span>
      <span className="xx-large-font">
        {driver.givenName} {driver.familyName}
      </span>
      <span className="large-font" style={{ marginLeft: '5px' }}>
        (#{driver.permanentNumber})
      </span>
    </span>}
  </>;
  const driverBodyContent = <>{driver &&
    <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly' }}>
      <div>Nationality: {driver.nationality}</div>
      <img src={FlagHelper.getFlagFromDenonym(driver.nationality)} alt={`${driver.nationality} flag`} />
      <div>Date of birth: {new Date(driver.dateOfBirth).toLocaleDateString()}</div>
      <div><a href={driver.url} target="_blank">Wikipedia</a></div>
      <div style={{ width: '15%' }}>
        Seasons (click year to view):
        <div style={{ height: '30vh', overflowY: 'auto', border: 'solid white 1px' }}>
          <div className="displayFlex flexDirCol flexAlignItemsCenter">
            {driverSeasons.slice().reverse().map(season =>
              <span>
                <Link to={`/${season.season}`}>{season.season}</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>}</>;
  return (
    <>
      <div className="page-header displayFlex flexJustContentCenter">
        <UseReduxAsyncStatus status={driverStatus} successContent={driverHeaderContent} error={driverError} fetchAction={fetchDriver} fetchParams={driverID || ''} />
      </div>
      <div className="page-content">
        {driverBodyContent}
      </div>
    </>
  );
};
