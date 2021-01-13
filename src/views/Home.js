import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace('/welcome');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return null;
}

export default HomePage;
