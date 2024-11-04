import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

export default function ActorCard({
  name,
  image,
  gender,
  country,
  birthday,
  deathday,
}) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        {' '}
        <img className="image" src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
}
