import { useState } from 'react';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();

    console.log(body);

    // https://api.tvmaze.com/search/shows?q=girls
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
