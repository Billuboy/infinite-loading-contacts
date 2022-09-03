import { useEffect, RefObject, useState } from 'react';

export default function useIntersection(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observer: any;
    if (ref?.current) {
      observer = new IntersectionObserver(
        (e) => {
          setIntersecting(e[0].isIntersecting);
        },
        { root: null, rootMargin: '0px', threshold: 0 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
}
