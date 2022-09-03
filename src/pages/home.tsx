import { useRef, useEffect } from 'react';

import ContactCard from '@components/home/contactCard';
import { useInfiniteScroll, useIntersection } from '@hooks';

const PAGE_LIMIT = 10;

export default function Home() {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(skeletonRef);
  const { delayedData, error, setSize } = useInfiniteScroll(PAGE_LIMIT);

  const isInitLoading = !delayedData && !error;

  useEffect(() => {
    if (!isInitLoading && isVisible) setSize((curr) => curr + 1);
  }, [isVisible, isInitLoading]);

  const renderContactList = () =>
    delayedData?.map((value) => <ContactCard key={value.email} info={value} />);

  return (
    <div>
      {delayedData && renderContactList()}
      <div ref={skeletonRef}>Loading...</div>
    </div>
  );
}
