import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchConstructor, selectConstructor, selectConstructorError, selectConstructorSeasons, selectConstructorStatus } from "../../app/constructor/constructorSlice";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Constructor.module.css";

export const Constructor = ({ }) => {
  const { constructorID } = useParams();
  const dispatch = useAppDispatch();

  const constructor = useAppSelector(selectConstructor);
  const constructorSeasons = useAppSelector(selectConstructorSeasons);
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

  const constructorBodyContent = <>{constructor &&
    <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly' }}>
      {constructorID && constructorLogos && constructorLogos[constructorID] && <img src={constructorLogos[constructorID]} alt={`${constructorID} flag`} />}
      <div>Nationality: {constructor.nationality}</div>
      <img src={FlagHelper.getFlagFromDenonym(constructor.nationality)} alt={`${constructor.nationality} flag`} />
      <div><a href={constructor.url} target="_blank">Wikipedia</a></div>
      <div style={{ width: '15%' }}>
        Seasons (click year to view):
        <div style={{ height: '30vh', overflowY: 'auto', border: 'solid white 1px' }}>
          <div className="displayFlex flexDirCol flexAlignItemsCenter">
            {constructorSeasons.slice().reverse().map(season =>
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
        <UseReduxAsyncStatus status={constructorStatus} error={constructorError} successContent={constructorHeaderContent} fetchAction={fetchConstructor} fetchParams={constructorID} />
      </div>
      <div className="page-content">
        {constructorBodyContent}
      </div>
    </>
  );
};
