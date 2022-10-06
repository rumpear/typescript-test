import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorage = <T>(
  key: string,
  defaultValue?: string,
) => [T, Dispatch<SetStateAction<T>>];

export const useLocalStorage: UseLocalStorage = (key, defaultValue = '') => {
  const ifLocalDataExist = localStorage.getItem(key);

  const getData = () => {
    return ifLocalDataExist ? JSON.parse(ifLocalDataExist) : defaultValue;
  };

  const setData = () => {
    return localStorage.setItem(key, JSON.stringify(state));
  };

  const [state, setState] = useState(getData);
  useEffect(setData, [key, state]);

  return [state, setState];
};
