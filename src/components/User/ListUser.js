import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../../services/UserService';
import { Button } from 'react-bootstrap';
const ListUser = (props) =>{
    const [listUser, setlistUser] = useState([]);
    useEffect(()=>{
        getAllUser();
        
    },[])

    const getAllUser = async () =>{
        let res = await fetchAllUser();
        if(res && res.data){
            setlistUser(res.data)
        }
    }
    
    return (<>
    <Container>
        
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
    </Container>
    
    
    
    </>)
}
export default ListUser;