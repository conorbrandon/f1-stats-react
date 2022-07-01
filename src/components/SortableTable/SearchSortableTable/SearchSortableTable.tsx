import React, { useMemo, useState } from "react";
import { deep_value } from "../../../helpers/SortableTableHelper";
import { Comparators, SortableTable, Transformers } from "../SortableTable";
import styles from "./SearchSortableTable.module.css";

interface SeachSortableTableProps {
  data: any[],
  propertiesToSeach: string[],
  dataTypeToSearch: string,
  placeholder: string,
  theSortableTableTemplate: string[],
  theSortableTableCaption: string,
  theSortableTableTransformers: Transformers,
  theSortableTableComparators: Comparators
};

const searchAllProperties = (item: {}, propertiesToSearch: string[], filterText: string) => {
  const filterTextSplit = filterText.split(" ");
  let match = false;
  for (let i = 0; i < filterTextSplit.length; i++) {
    const filter = filterTextSplit[i];
    for (let p = 0; p < propertiesToSearch.length; p++) {
      const property = propertiesToSearch[p];
      match = deep_value(item, property).toLowerCase().includes(filter.toLowerCase());
      if (match) break;
    }
  }
  
  return match;
};

const useSearchableData = (items: any[], propertiesToSearch: string[]) => {
  const [filterText, setFilterText] = useState<string>('');
  const filteredItems = useMemo(() => {
    let filterableItems = [...items];
    if (filterText) {
      filterableItems = filterableItems.filter((item) => {
        return (
          searchAllProperties(item, propertiesToSearch, filterText)
        );
      });
    }
    return filterableItems;
  }, [items, filterText]);
  return { filteredItems, setFilterText };
};

export const SearchSortableTable: React.FC<SeachSortableTableProps> = ({ data, propertiesToSeach, dataTypeToSearch, placeholder, theSortableTableTemplate, theSortableTableCaption, theSortableTableTransformers, theSortableTableComparators }) => {
  const { filteredItems, setFilterText } = useSearchableData(data, propertiesToSeach);
  return (
    <><div className={styles.container}>
      <span className="displayFlex flexDirCol flexAlignItemsCenter">
        <span>Search {dataTypeToSearch}</span>
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilterText(event.target.value)} style={{ width: '100%' }} type="text" name="data" id="data" placeholder={`Search ${placeholder}`} />
      </span>
    </div>
      <div style={{ width: '60%' }} className="displayFlex flexDirRow flexJustContentCenter">
        <div style={{ minWidth: '100%' }}>
          <SortableTable
            indices
            items={filteredItems}
            template={theSortableTableTemplate}
            caption={theSortableTableCaption}
            transformers={theSortableTableTransformers}
            comparators={theSortableTableComparators}
          />
        </div>
      </div>
    </>
  );
};
