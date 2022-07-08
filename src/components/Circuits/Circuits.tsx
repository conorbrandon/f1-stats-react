import React from "react";
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { fetchCircuits, selectCircuits, selectCircuitsError, selectCircuitsStatus } from "../../app/circuits/circuitsSlice";
import { useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastCircuit } from "../../model/ErgastCircuit";
import { ErgastDriver } from "../../model/ErgastDriver";
import { SearchSortableTable } from "../SortableTable/SearchSortableTable/SearchSortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Circuits.module.css";



export const Circuits = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const circuits = useAppSelector(selectCircuits);
  const circuitsStatus = useAppSelector(selectCircuitsStatus);
  const circuitsError = useAppSelector(selectCircuitsError);

  const circuitsSuccessContent = circuits.length ?
    <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ minWidth: '90%' }}>
      <SearchSortableTable
        data={circuits}
        propertiesToSeach={['circuitName', 'Location.country']}
        dataTypeToSearch={'circuits'}
        placeholder={'name or country'}
        theSortableTableTemplate={['Circuit Name', 'Country']}
        theSortableTableCaption={'Circuits'}
        theSortableTableTransformers={{
          'Circuit Name': SortableTableHelper.transformers.CircuitName,
          Country: SortableTableHelper.transformers.CircuitCountry
        }}
        theSortableTableComparators={{
          'Circuit Name': (a: ErgastCircuit, b: ErgastCircuit) => SortableTableHelper.comparators.GenericStringType(a, b, 'circuitName'),
          Country: (a: ErgastCircuit, b: ErgastCircuit) => SortableTableHelper.comparators.GenericStringType(a, b, 'Location.country'),
        }}
      />
    </div>
    : <></>;

  return (
    <>
    <div className={`page-header ${isDarkMode ? 'dark' : 'light'}`}></div>
    <div className={`page-content ${isDarkMode ? 'dark' : 'light'}`}>
      <UseReduxAsyncStatus status={circuitsStatus} error={circuitsError} successContent={circuitsSuccessContent} fetchAction={fetchCircuits} fetchParams={'all'} />
    </div>
    </>
  );
};
