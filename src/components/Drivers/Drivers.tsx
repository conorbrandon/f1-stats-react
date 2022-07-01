import React from "react";
import { fetchDrivers, selectDrivers, selectDriversError, selectDriversStatus } from "../../app/drivers/driversSlice";
import { useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastDriver } from "../../model/ErgastDriver";
import { SearchSortableTable } from "../SortableTable/SearchSortableTable/SearchSortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Drivers.module.css";

export const Drivers = ({ }) => {
  const drivers = useAppSelector(selectDrivers);
  const driversStatus = useAppSelector(selectDriversStatus);
  const driversError = useAppSelector(selectDriversError);

  const driversSuccessContent = drivers.length ?
    <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ minWidth: '90%' }}>
      <SearchSortableTable
        data={drivers}
        propertiesToSeach={['familyName', 'givenName', 'nationality']}
        dataTypeToSearch={'drivers'}
        placeholder={'name or nationality'}
        theSortableTableTemplate={['Name', 'Date of birth', 'Nationality', 'Number', 'Code']}
        theSortableTableCaption={'Drivers'}
        theSortableTableTransformers={{
          Name: SortableTableHelper.transformers.DriverName,
          'Date of birth': SortableTableHelper.transformers['Date of birth'],
          Nationality: (driver: ErgastDriver) => SortableTableHelper.transformers.RawFromDeepValue(driver, 'nationality'),
          Number: (driver: ErgastDriver) => SortableTableHelper.transformers.RawFromDeepValue(driver, 'permanentNumber'),
          Code: (driver: ErgastDriver) => SortableTableHelper.transformers.RawFromDeepValue(driver, 'code')
        }}
        theSortableTableComparators={{
          Name: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericStringType(a, b, 'familyName'),
          'Date of birth': (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericDateType(a, b, 'dateOfBirth'),
          Nationality: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericStringType(a, b, 'nationality'),
          Number: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericNumberType(a, b, 'permanentNumber'),
          Code: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericStringType(a, b, 'code')
        }}
      />
    </div>
    : <></>;

  return (
    <div className="page-content">
      <UseReduxAsyncStatus status={driversStatus} error={driversError} successContent={driversSuccessContent} fetchAction={fetchDrivers} fetchParams={'all'} />
    </div>
  );
};
