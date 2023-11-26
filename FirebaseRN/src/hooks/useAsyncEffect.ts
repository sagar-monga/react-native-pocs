import {useEffect} from 'react';

const useAsyncEffect = (callback: () => Promise<void>, deps?: React.DependencyList) => {
  useEffect(() => {
    const functionToCall = async () => {
      await callback();
    };
    functionToCall();
  }, [deps]);
};

export default useAsyncEffect;