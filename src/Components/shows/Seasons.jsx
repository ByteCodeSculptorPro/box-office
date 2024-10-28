export default function Seasons({ seasons }) {
  return (
    <div>
      <p>Seasons in total:{!!seasons && seasons.length}</p>
      <p>
        Episodes in total:
        {seasons.reduce((som, season) => som + season.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season:{season.number}</p>
            <p>Episodes:{season.episodeOrder}</p>
            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
