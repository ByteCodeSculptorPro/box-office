export default function AppTitle({
  title = 'Box-office',
  subtitle = 'Are you looking for a movie or an app ?',
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
