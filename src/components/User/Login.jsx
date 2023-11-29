import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import UserService from '../../services/UserService'
import { useNavigate } from 'react-router-dom'

export default function Login()  {
    const [username, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const { loginContext } = useContext(AppContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await UserService.Login(username, password)
            console.log(res)
            loginContext(res.data);
            console.log('tt',res.data)
            if(res.data.role === 1 ){
               navigate('/list-user');
            }else{ navigate('/')}
            
        } catch (error) {
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
    };
    return (
        <>
            <div className="form-outline mb-4">
                <input
                    type="text"
                    id="form2Example17"
                    className="form-control form-control-lg"
                    name="userName"
                    onChange={(e) =>
                        setUserName(e.target.value)
                    }
                />
                <label className="form-label" 
                >Tài khoản</label
                >
            </div>

            <div class="form-outline mb-4">
                <input
                    type="password"
                    id="form2Example27"
                    className="form-control form-control-lg"
                    name="password"
                    onChange={(e) =>
                        setpassword(e.target.value)
                    }
                />
                <label className="form-label" 
                >Mật khẩu</label
                >
            </div>
            <div className="pt-1 mb-4 text-center">
                <button class="btn btn-lg btn-block text-light" style={{ backgroundColor: ' #ffc107', }} onClick={handleSubmit}>
                    Đăng nhập
                </button>
            </div>
            <div class="mb-3 text-start text-danger fs-6">
                <span class="text-danger">{error}</span>
            </div>
        </>
    )
}
