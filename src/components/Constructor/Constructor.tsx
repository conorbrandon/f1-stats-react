import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastConstructor } from "../../model/ErgastConstructor";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./Constructor.module.css";

export const Constructor = ({ }) => {
  const { constructorID } = useParams();
  const [constructor, setConstructor] = useState<ErgastConstructor>();
  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    ErgastAPI.getConstructor(constructorID).then(res =>  setConstructor(res));
  }, []);
  useEffect(() => {
    if (constructor && (!constructorLogos || !constructorLogos[constructorID || ''])) dispatch(fetchConstructorLogo(constructor));
  }, [constructor])
  const constructorHeaderContent = constructor ?
      <span>
        <span className="xx-large-font">
          {constructor.name}
        </span>
      </span> 
      : <LoadingSpinner />;
  const constructorBodyContent = constructor ? <>
    {constructorID && constructorLogos && constructorLogos[constructorID] && <img src={constructorLogos[constructorID]} alt={`${constructorID} flag`} />}
    <div>Nationality: {constructor.nationality}</div>
    <img src={FlagHelper.getFlagFromDenonym(constructor.nationality)} alt={`${constructor.nationality} flag`} />
    <div><a href={constructor.url} target="_blank">Wikipedia</a></div>
  </> : <LoadingSpinner />;
  return (
    <>
      <div className="page-header">
        {constructorHeaderContent}
      </div>
      <div className="page-content padded">
        {constructorBodyContent}
      </div>
    </>
  );
};
