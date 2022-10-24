import { useEffect, useMemo } from 'react';
import { useLatest } from 'react-use';
import { throttle } from 'lodash';

export const useThrottle = (cb: any, ms: number) => {
  const latestCb = useLatest(cb);
  const throttledFn = useMemo(
    () =>
      throttle((...args) => {
        latestCb.current(...args);
      }, ms),
    [ms, latestCb],
  );

  useEffect(() => () => throttledFn.cancel(), [throttledFn]);

  return throttledFn;
};
