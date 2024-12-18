import { FlexGrid } from '../common/FlexGrid';
import ActorCard from './ActorCard';
import NotFoundImage from '../../lib/not-found-image.png';

export default function ActorGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={data.person.image ? data.person.image.medium : NotFoundImage}
        />
      ))}
    </FlexGrid>
  );
}
