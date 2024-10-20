import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

export default function Show() {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
        console.log(showData);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }
  if (showData) {
    return <div>Got show data:{showData.name}</div>;
  }

  return <div>Data is loading</div>;
}
