/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import ActorGrid from '../Components/actors/ActorGrid';
import ShowGrid from '../Components/shows/ShowGrid';
import SearchForm from '../Components/SearchForm';
import { TextCenter } from '../Components/common/TextCenter';

export default function Home() {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    //   try {
    //     setApiDataError(null);
    //     let data;
    //     if (searchOption === 'shows') {
    //       data = await searchForShows(q);
    //       setApiData(data);
    //     } else {
    //       data = await searchForPeople(q);
    //       setApiData(data);
    //     }
    //   } catch (error) {
    //     setApiDataError(error);
    //   }
  };
  const renderApiData = () => {
    if (apiDataError)
      return <TextCenter>Error occured:{apiDataError.message}</TextCenter>;
    if (apiData?.length === 0) {
      return <TextCenter>No results</TextCenter>;
    }

    if (apiData && apiData.length > 0)
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {renderApiData()}
    </div>
  );
}
