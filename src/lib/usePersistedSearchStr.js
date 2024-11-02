import { useEffect, useState } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persitedValue = sessionStorage.getItem(sessionStorageKey);

    return persitedValue ? JSON.parse(persitedValue) : initialState;
  });
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);

  return [state, setState];
};

export const useSearchStr = () => usePersistedState('', 'searchString');
