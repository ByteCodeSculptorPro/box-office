import ShowCard from './ShowCard';

export default function ShowGrid({ shows }) {
  return (
    <div className="show-grid">
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
        />
      ))}
    </div>
  );
}
