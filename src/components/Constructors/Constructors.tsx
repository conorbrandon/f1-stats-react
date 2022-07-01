import React from "react";
import { fetchConstructors, selectConstructors, selectConstructorsError, selectConstructorsStatus } from "../../app/constructors/constructorsSlice";
import { useAppSelector } from "../../app/hooks";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastDriver } from "../../model/ErgastDriver";
import { SearchSortableTable } from "../SortableTable/SearchSortableTable/SearchSortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Constructors.module.css";

export const Constructors = ({ }) => {
  const constructors = useAppSelector(selectConstructors);
  const constructorsStatus = useAppSelector(selectConstructorsStatus);
  const constructorsError = useAppSelector(selectConstructorsError);

  const constructorsSuccessContent = constructors.length ?
    <div className="displayFlex flexDirCol flexAlignItemsCenter">
      <SearchSortableTable
        data={constructors}
        propertiesToSeach={['name', 'nationality']}
        dataTypeToSearch={'constructors'}
        placeholder={'name or nationality'}
        theSortableTableTemplate={['Name', 'Nationality']}
        theSortableTableCaption={'Constructors'}
        theSortableTableTransformers={{
          Name: SortableTableHelper.transformers.ConstructorName,
          Nationality: (driver: ErgastDriver) => SortableTableHelper.transformers.RawFromDeepValue(driver, 'nationality'),
        }}
        theSortableTableComparators={{
          Name: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericStringType(a, b, 'name'),
          Nationality: (a: ErgastDriver, b: ErgastDriver) => SortableTableHelper.comparators.GenericStringType(a, b, 'nationality'),
        }}
      />
    </div>
    : <></>;

  return (
    <div className="page-content">
      <UseReduxAsyncStatus status={constructorsStatus} error={constructorsError} successContent={constructorsSuccessContent} fetchAction={fetchConstructors} fetchParams={'all'} />
    </div>
  );
};
