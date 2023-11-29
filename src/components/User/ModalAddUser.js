import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserService from "../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalAddNew=(props) =>{
    const { show, handleClose} = props;

    const [fullname, setfullname]= useState("");
    const [username, setusername]= useState("");
    const [email, setemail]= useState("");
    const [password, setpassword]= useState("");
    const [sex, setsex]= useState("");
    const [address, setaddress]= useState("");
    const [groupid, setgroupid]= useState("");
    const handleAddUser = async() => {
        let res = await UserService.NewUser(username,password,fullname,address,sex,email,groupid)
        console.log(">>>chech res:", res)
        if(res && res.message == "thêm người dùng mới thành công"){
          //thanh cong
          handleClose();
          setfullname('');
          setusername('');
          setemail('');
          setpassword('');
          setsex('');
          setaddress('');
          setgroupid('');
          toast.success('Thêm người dùng mới thành công');
          
        }else{
          //that bai
        }
    }
    return(
        <>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body'>
            <div>
                <form>
                <div className="mb-3">
                    <label  className="form-label">Fullname</label>
                    <input type="text" className="form-control" value={fullname} onChange={(event)=>setfullname(event.target.value)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(event)=>setusername(event.target.value)} />
                   
                </div>

                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(event)=>setemail(event.target.value)} />
                   
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(event)=>setpassword(event.target.value)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Sex</label>
                    <input type="text" className="form-control" value={sex} onChange={(event)=>setsex(event.target.value)} />                
                </div>

                <div className="mb-3">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" value={address} onChange={(event)=>setaddress(event.target.value)}/>                  
                </div>
                <div className="mb-3">
                    <label  className="form-label">Groupid</label>
                    <input type="text" className="form-control" value={groupid} onChange={(event)=>setgroupid(event.target.value)} />
                </div>
                
                </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleAddUser()}>Understood</Button>
        </Modal.Footer>
      </Modal>
        
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        </>

    )

}
export default ModalAddNew;