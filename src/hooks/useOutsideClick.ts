/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { ZeroFuncType } from 'src/util';

const useOutsideClick = (callback:ZeroFuncType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e:MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
