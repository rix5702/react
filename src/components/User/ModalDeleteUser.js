
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserService from "../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalDeleteUser=(props) =>{
    const { show, handleClose,dateUserDelete} = props;
    const DeleteUser = async() => {
        let res = await UserService.deleteUser(dateUserDelete.stt)
        console.log('>>>check res:', res)
        if(res && +res.statusCode === 204 ){
            toast.success("Xóa thành công người dùng")
            handleClose();
        }else{
            toast.error("Lỗi không thể xóa")
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
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body'>
           bạn có chắc chắn muốn xóa user?
           <b>email = {dateUserDelete.email}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> DeleteUser()}>Delete</Button>
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
export default ModalDeleteUser;