import { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';

import { User } from 'types/apiResponse';

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => <User[]>json.results);

export default function useInfiniteScroll(limit: number) {
  const [delayedData, setDelayedData] = useState<User[] | undefined>();
  const [loading, setLoading] = useState(false);
  const { data, error, isValidating, setSize, size } = useSWRInfinite(
    (index) =>
      `https://randomuser.me/api/?page=${
        index + 1
      }&results=${limit}&inc=name,email,picture,phone`,
    fetcher,
    {
      revalidateAll: false,
      revalidateFirstPage: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      refreshInterval: 0,
    }
  );

  useEffect(() => {
    setLoading(() => true);

    const timer = setTimeout(() => {
      if (!isValidating) {
        setDelayedData((curr) => [
          ...(curr || []),
          ...(data?.[size - 1] || []),
        ]);
        setLoading(() => false);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isValidating]);

  return { delayedData, error, loading, setSize, size };
}
