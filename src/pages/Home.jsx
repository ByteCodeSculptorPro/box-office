/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import ActorGrid from '../Components/actors/ActorGrid';
import ShowGrid from '../Components/shows/ShowGrid';
import SearchForm from '../Components/SearchForm';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      let data;
      if (searchOption === 'shows') {
        data = await searchForShows(q);
        setApiData(data);
      } else {
        data = await searchForPeople(q);
        setApiData(data);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) return <div>{apiDataError.message}</div>;
    if (apiData?.length === 0) {
      return <div>No results</div>;
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
