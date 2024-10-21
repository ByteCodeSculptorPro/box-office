import { useParams } from 'react-router-dom';

export default function Show() {
  const { showId } = useParams();
  console.log(showId);
  return <div>Show Id:{showId}</div>;
}
