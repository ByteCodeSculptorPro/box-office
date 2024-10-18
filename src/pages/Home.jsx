/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';

export default function Home() {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  console.log(searchOption);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption === 'shows') {
        const data = await searchForShows(searchStr);
        setApiData(data);
        console.log(apiData);
      } else {
        const data = await searchForPeople(searchStr);
        setApiData(data);
        console.log(apiData);
      }
    } catch (error) {
      setApiDataError(error);
      console.log(apiDataError);
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
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'shows'}
            value="shows"
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'actors'}
            value="actors"
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {renderApiData()}
    </div>
  );
}
