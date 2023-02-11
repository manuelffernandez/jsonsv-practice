import { LastPageContext } from './LastPageContext';
import { useState } from 'react';

export interface LastPageState {
  lastPageNumber: string;
}

interface LastPageProviderProps {
  children: JSX.Element | Array<JSX.Element>;
}

const LastPageProvider = (props: LastPageProviderProps): JSX.Element => {
  const { children } = props;

  const [lastPageNumber, setLastPageNumber] =
    useState<LastPageState['lastPageNumber']>('1');

  const onPageChange = (pageNumber: string) => {
    setLastPageNumber(pageNumber);
  };

  return (
    <LastPageContext.Provider value={{ lastPageNumber, onPageChange }}>
      {children}
    </LastPageContext.Provider>
  );
};

export default LastPageProvider;
