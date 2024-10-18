import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';

export default function Home() {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      const data = await searchForShows(searchStr);
      setApiData(data);
      console.log(apiData);
    } catch (error) {
      setApiDataError(error);
      console.log(apiDataError);
    }
  };
  const renderApiData = () => {
    if (apiDataError) return <div>{apiDataError.message}</div>;
    return (
      apiData &&
      apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
    );
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>

      {renderApiData()}
    </div>
  );
}
