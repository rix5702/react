
import { Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import ListUser from './components/User/ListUser';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/User/ModalAddUser';
import { useState } from 'react';
function App() {
  const [isShowModalAddNew, setisShowModalAddNew] = useState(false);
  const handleClose =() =>{
    {setisShowModalAddNew(false)};
  }
  return (
    <div className="app-container">
      <Header/>
      <Container>
      <div className='my-3 d-flex justify-content-between  '>
        <h3>List User:</h3>
        <button className='btn btn-success' onClick={()=> setisShowModalAddNew(true)}>Add New User</button>

        </div>
      <ListUser/>
      </Container>
      <ModalAddNew
      show={isShowModalAddNew}
      handleClose= {handleClose}
      />
    </div>
  );
}

export default App;
