import axios from './customize-axios'

const fetchAllUser = () =>{
    return axios.get('/list-user')
}
const NewUser = (username,password,fullname,address,sex,email,groupid) =>{
    return axios.post('/new-user',{username,password,fullname,address,sex,email,groupid})
}
const Login = (username,password) =>{
    return axios.post('/login',{username,password})
}
const Logout = () =>{
    return axios.get('/logout')
}

const updateUser = (username,password,fullname,address,sex,email,groupid,stt) =>{
    return axios.post('/update-user',{username,password,fullname,address,sex,email,groupid,stt})
}
const deleteUser= (stt) =>{
    return axios.delete(`/delete-user/${stt}`)
}
export default { 
    fetchAllUser,
    NewUser,
    Login,
    Logout,
    updateUser,
    deleteUser
};