import { useState } from 'react';
import { useSearchStr } from '../lib/usePersistedSearchStr';
import CustomRadio from './CustomRadio';

// const usePersistedSearchStr = sessionStorageKey => {
//   const [state, setSearchStr] = useState(() => {
//     const persitedValue = sessionStorage.getItem(sessionStorageKey);

//     return persitedValue ? JSON.parse(persitedValue) : '';
//   });

//   useEffect(() => {
//     sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
//   }, [state, sessionStorageKey]);

//   return [state, setSearchStr];
// };

export default function SearchForm({ onSearch }) {
  //const [searchStr, setSearchStr] = useState('');
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  // useEffect(() => {
  //   console.log('Component mounted');
  // }, []);
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
      <CustomRadio
        label="Shows"
        name="search-option"
        checked={searchOption === 'shows'}
        value="shows"
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        name="search-option"
        checked={searchOption === 'actors'}
        value="actors"
        onChange={onRadioChange}
      />

      <button type="submit">Search</button>
    </form>
  );
}
