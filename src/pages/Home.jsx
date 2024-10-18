/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
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
    if (apiData)
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {renderApiData()}
    </div>
  );
}
