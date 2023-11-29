import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserService from "../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalEditUser=(props) =>{
    const { show, handleClose,dataUserEdit} = props;
    const [stt, setstt]= useState("");
    const [fullname, setfullname]= useState("");
    const [username, setusername]= useState("");
    const [email, setemail]= useState("");
    const [password, setpassword]= useState("");
    const [sex, setsex]= useState("");
    const [address, setaddress]= useState("");
    const [groupid, setgroupid]= useState("");
    const handleEditUser= async () => {
       let res = await UserService.updateUser(username,password,fullname,address,sex,email,groupid,stt)
       console.log(res.message)
       if(res && res.message ==="cập nhật người dùng  thành công"){
        handleClose();
        toast.success("cập nhật người dùng  thành công");
       }else{
        toast.error("that bai");
       }
        //thanh cong
    }
    useEffect(()=>{
        if (show) {
            setstt(dataUserEdit.stt)
            setfullname(dataUserEdit.fullname)
            setusername(dataUserEdit.username)
            setemail(dataUserEdit.email)
            setpassword(dataUserEdit.password)
            setsex(dataUserEdit.sex)
            setaddress(dataUserEdit.address)
            setgroupid(dataUserEdit.groupid)
        }
    },[dataUserEdit])
    return(
        <>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit A User</Modal.Title>
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
          <Button variant="primary" onClick={()=> handleEditUser()}>
            Confirm
            </Button>
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
export default ModalEditUser;