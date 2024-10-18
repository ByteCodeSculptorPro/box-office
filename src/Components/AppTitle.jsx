export default function AppTitle({
  title = 'Box-office',
  subtitle = 'Are you looking for a movie or an actor ?',
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
