import { useRef } from 'react';

const useDebounceFn = <T extends any[]>(callback: (...args: T) => void) => {
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...args: T) => {
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }
    timeoutID.current = setTimeout(() => callback(...args), 2000);
  };
};

export default useDebounceFn;
