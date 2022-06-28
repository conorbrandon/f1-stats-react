import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { setNewConstructorResults, fetchConstructor, selectConstructor, selectConstructorError, selectConstructorResults, selectConstructorSeasons, selectConstructorStatus, selectConstructorQualifying, setNewConstructorQualifying } from "../../app/constructor/constructorSlice";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { EntityProfile } from "../EntityProfile/EntityProfile";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Constructor.module.css";

export const Constructor = ({ }) => {
  const { constructorID } = useParams();
  const dispatch = useAppDispatch();

  const constructor = useAppSelector(selectConstructor);
  const constructorSeasons = useAppSelector(selectConstructorSeasons);
  const constructorResults = useAppSelector(selectConstructorResults);
  const constructorQualifying = useAppSelector(selectConstructorQualifying);
  const constructorStatus = useAppSelector(selectConstructorStatus);
  const constructorError = useAppSelector(selectConstructorError);

  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (constructor && (!constructorLogos || !constructorLogos[constructorID || ''])) dispatch(fetchConstructorLogo(constructor));
  }, [constructor]);

  const constructorHeaderContent = <>{constructor &&
    <span className="xx-large-font">
      {constructor.name}
    </span>}</>;

  return (
    <>
      <div className="page-header displayFlex flexJustContentCenter">
        <UseReduxAsyncStatus status={constructorStatus} error={constructorError} successContent={constructorHeaderContent} fetchAction={fetchConstructor} fetchParams={constructorID} />
      </div>
      <EntityProfile 
        entity={constructor} 
        entityID={constructorID} 
        entitySeasons={constructorSeasons} 
        entityResults={constructorResults}
        ergastResultsFn={ErgastAPI.getConstructorResults}
        setNewResultsReducerAction={setNewConstructorResults}
        entityQualifying={constructorQualifying}
        ergastQualifyingFn={ErgastAPI.getConstructorQualifying}
        setNewQualifyingReducerAction={setNewConstructorQualifying}
        constructorLogos={constructorLogos}
        isConstructorProfile={true} />
    </>
  );
};
