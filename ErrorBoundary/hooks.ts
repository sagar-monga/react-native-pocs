import {useEffect, DependencyList} from 'react';
import useAsync from 'react-use/lib/useAsync';

export const useAsyncEffect = (asyncFunc: () => Promise<(() => void) | void>, deps: DependencyList = []) => {
  const state = useAsync(asyncFunc, [...deps]);

  useEffect(() => {
    return () => {
      state.value && state.value();
    };
  }, [state.value]);
};
