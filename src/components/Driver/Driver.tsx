import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { ErgastDriver } from "../../model/ErgastDriver";
import styles from "./Driver.module.css";



export const Driver = ({ }) => {
  const { driverID } = useParams();
  const [driver, setDriver] = useState<ErgastDriver>();
  useEffect(() => {
    ErgastAPI.getDriver(driverID)
      .then(response => setDriver(response))
      .catch(error => console.log("can't fetch driver", error));
  });
  return (
    <>
      {driver && <>
        <div className="page-header">
            <span>
              <span className="xx-large-font">
                {driver.givenName} {driver.familyName}
              </span>
              <span className="large-font" style={{marginLeft: '5px'}}>
                (#{driver.permanentNumber})
              </span>
            </span>
        </div>
        <div className="page-content" style={{marginLeft: '5rem'}}>
          <div>Nationality: {driver.nationality}</div>
          <div>Date of birth: {new Date(driver.dateOfBirth).toLocaleDateString()}</div>
          <div><a href={driver.url} target="_blank">Wikipedia</a></div>
        </div>
      </>}
    </>
  );
};
