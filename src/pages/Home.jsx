import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/starred">Starred</Link>
    </div>
  );
}
