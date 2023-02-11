import { createContext, useContext } from 'react';
import { LastPageState } from './LastPageProvider';

export interface LastPageProviderValues {
  lastPageNumber: LastPageState['lastPageNumber'];
  onPageChange: (pageNumber: string) => void;
}

export const LastPageContext = createContext<LastPageProviderValues>(
  // ts assertion
  {} as LastPageProviderValues
);

export const getLastPageContext = () => {
  return useContext(LastPageContext);
};
