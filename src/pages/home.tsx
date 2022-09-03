/* eslint-disable react/no-array-index-key */
import 'styles/pages/home.css';

import { useRef, useEffect } from 'react';

import ContactCard from '@components/home/contactCard';
import SkeletonCard from '@components/home/skeletonCard';
import { useInfiniteScroll, useIntersection } from '@hooks';

const PAGE_LIMIT = 16;

export default function Home() {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(skeletonRef);
  const { delayedData, error, loading, setSize } =
    useInfiniteScroll(PAGE_LIMIT);

  const isInitLoading = !delayedData && !error;

  useEffect(() => {
    if (!isInitLoading && isVisible) setSize((curr) => curr + 1);
  }, [isVisible, isInitLoading]);

  const renderContactList = () =>
    delayedData?.map((value) => <ContactCard key={value.email} info={value} />);

  const renderSkeletonList = () =>
    Array(PAGE_LIMIT)
      .fill(0)
      .map((_, index) => <SkeletonCard key={index} />);

  return (
    <div className="heading-outer-container">
      <div className="heading">
        <h1>Your Contacts</h1>
        <div />
      </div>
      <div className="contacts">
        {delayedData && renderContactList()}
        {loading && renderSkeletonList()}
        <div ref={skeletonRef} />
      </div>
    </div>
  );
}
