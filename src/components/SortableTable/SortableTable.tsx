import React, { useMemo, useState } from "react";
import styles from "./SortableTable.module.css";

interface SortableTableProps {
  items?: any[],
  template?: string[],
  caption?: string,
  transformers?: {
    [key: string]: (data: any) => JSX.Element
  }
  comparators?: Comparators
}
type SortDirection = "asc" | "desc";
interface Comparators {
  [key: string]: (a: any, b: any) => number
}
interface SortConfig {
  direction: SortDirection,
  key: string
}

const useSortableData = (items: any[], config?: SortConfig, comparators?: Comparators) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | undefined>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== undefined && comparators && comparators[sortConfig.key]) {
      sortableItems.sort((a, b) => {
        const difference = comparators[sortConfig.key](a, b);
        if (difference < 0) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (difference > 0) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return { sortedItems, requestSort, sortConfig };
};

export const SortableTable: React.FC<SortableTableProps> = ({ items, template, caption, transformers, comparators }) => {
  const { sortedItems, requestSort, sortConfig } = useSortableData(items || [], undefined, comparators);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return 'unfold_more';
    }
    return sortConfig.key === name ? sortConfig.direction === 'asc' ? 'expand_more' : 'expand_less' : '';
  };
  return (
    <div className={styles.centeredTable}>
      <table style={{ width: '90%' }}>
        {caption && <caption className="xx-large-font">{caption}</caption>}
        <thead>
          <tr>
            {template?.map((key, i) => {
              return (
                <th key={i}>
                  <button className={styles.button} type="button" 
                  onClick={comparators && comparators[key] ? () => requestSort(key) : () => {}}>
                    <div className="material-icons-align center">
                      <span>{key}</span>
                      {comparators && comparators[key] && <span className='material-icons'>{getClassNamesFor(key)}</span>}
                    </div>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, i) => (
            <tr key={i}>
              {template?.map((t, j) => {
                return (
                  <td key={j}>{transformers && transformers[t] ? transformers[t](item) : ''}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
