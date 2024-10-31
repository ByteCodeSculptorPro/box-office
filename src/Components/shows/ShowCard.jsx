//import { Link } from 'react-router-dom';

export default function ShowCard({ name, image, id, summary, onStarMeClick }) {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+>/g, '')
    : 'No descriptions';
  return (
    <div className="show-card">
      <div>
        {' '}
        <img className="image" src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <a href={`/shows/${id}`} target="_blank" rel="noreferrer">
        Read more
      </a>
      <button type="button" onClick={() => onStarMeClick(id)}>
        Star me
      </button>
    </div>
  );
}
