import { useEffect, useState } from 'react';
export default function SearchForm({ onSearch }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  useEffect(() => {
    console.log('Component mounted');
  }, []);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
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
  );
}
