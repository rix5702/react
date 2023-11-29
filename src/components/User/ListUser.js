import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
// import { fetchAllUser } from '../../services/UserService';
import UserService from '../../services/UserService';

import ModalAddNew from './ModalAddUser';
import { Button } from 'react-bootstrap';
const ListUser = (props) =>{
    const [listUser, setlistUser] = useState([]);
    const [isShowModalAddNew, setisShowModalAddNew] = useState(false);
    const handleClose =() =>{
        {setisShowModalAddNew(false)};
      }

    const handleUpdateUser = () => {

    }
    useEffect(()=>{
        getAllUser();
        
    },[])

    const getAllUser = async () =>{
        let res = await UserService.fetchAllUser();
        if(res && res.data){
            setlistUser(res.data)
        }
    }
    
    return (<>
    <Container>
    <div className='my-3 d-flex justify-content-between  '>
        <h3>List User:</h3>
        <button className='btn btn-success' onClick={()=> setisShowModalAddNew(true)}>Add New User</button>

        </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>username</th>
          <th>fullname</th>
          {/* <th>password</th> */}
          <th>address</th>
          <th>sex</th>
          <th>email</th>
          <th>groupid</th>
        </tr>
      </thead>
      <tbody>
        {listUser && listUser.length > 0 && 
        listUser.map((item, index) => {
            return (
                <tr key={`users-${index}`}>
                <td>{index +1 }</td>
                <td>{item.username}</td>
                <td>{item.fullname}</td>
                <td>{item.address}</td>
                <td>{item.sex}</td>
                <td>{item.email}</td>
                <td>{item.groupid}</td>
              </tr>
            )
        })
        }
       
      </tbody>
    </Table>
    <ModalAddNew
      show={isShowModalAddNew}
      handleClose= {handleClose}
      />
    </Container>
    
    
    
    </>)
}
export default ListUser;