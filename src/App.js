
import { Row } from 'react-bootstrap';
import './App.scss';
// import Header from './components/Header';
// import ListUser from './components/User/ListUser';
import Container from 'react-bootstrap/Container';
import { RouterProvider } from 'react-router-dom';

import router from './route';
import { useContext } from 'react';
// import { AppContext } from './context/AppProvider';

function App() {
  
  return (
    <div className="app-container">
        <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
