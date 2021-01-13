import { useEffect } from 'react';
import Cookies from 'js-cookie';

import './App.css';
import Routing from './router';

function App() {
  useEffect(() => {
    Cookies.remove('accountDetails');
  }, [])

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
