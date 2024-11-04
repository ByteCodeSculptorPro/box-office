import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../Components/shows/ShowGrid';
import { TextCenter } from '../Components/common/TextCenter';

export default function Starred() {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({
          show,
        }))
      ),
    refetchOnWindowFocus: false,

    // {
    // const apiRequestPromises = starredShows.map(showId =>
    //   getShowsByIds(showId)
    // );
    // await Promise.all(apiRequestPromises);
    // },
  });

  if (starredShows?.length == 0)
    return <TextCenter>No shows were starred</TextCenter>;
  if (starredShows?.length > 0)
    return <ShowGrid shows={starredShows}></ShowGrid>;
  if (starredShowsError)
    return <div>An error occured: {starredShowsError.message}</div>;

  return <TextCenter>Starred shows loading...</TextCenter>;
}
