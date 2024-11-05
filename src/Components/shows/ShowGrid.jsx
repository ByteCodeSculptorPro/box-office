//import { useEffect, useReducer } from 'react';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';
import ShowCard from './ShowCard';
import NotFoundImage from '../../lib/not-found-image.png';

// const usePresistedReducer = (reducer, initialState, localStorageKey) => {
//   const [state, dispatch] = useReducer(reducer, initialState, initial => {
//     const persistedValue = localStorage.getItem(localStorageKey);

//     return persistedValue ? JSON.parse(persistedValue) : initial;
//   });
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, JSON.stringify(state));
//   }, [state, localStorageKey]);
//   return [state, dispatch];
// };
// const starredShowsReducer = (currentStarred, action) => {
//   switch (action.type) {
//     case 'STAR':
//       return [...currentStarred, action.showId];
//     case 'UNSTAR':
//       return currentStarred.filter(showId => showId != action.showId);
//     default:
//       return currentStarred;
//   }
// };
export default function ShowGrid({ shows }) {
  // const [starredShows, dispatchStarred] = useReducer(starredShowsReducer, []);

  // const [starredShows, dispatch] = usePresistedReducer(
  //   starredShowsReducer,
  //   [],
  //   'starredShows'
  // );
  const [starredShows, dispatch] = useStarredShows();
  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) dispatch({ type: 'UNSTAR', showId });
    else dispatch({ type: 'STAR', showId });
  };
  console.log({ starredShows });
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={data.show.image ? data.show.image.medium : NotFoundImage}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
}
