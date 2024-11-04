import { useState } from 'react';
import { useSearchStr } from '../lib/usePersistedSearchStr';
import styled from 'styled-components';
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
      <SearchInput
        type="text"
        placeholder="Search for somthing"
        value={searchStr}
        onChange={onSearchInputChange}
      />
      <RadiosWrapper>
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
      </RadiosWrapper>
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
}

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
