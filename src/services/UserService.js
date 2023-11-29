import axios from './customize-axios'

const fetchAllUser = () =>{

    return axios.get('/list-user')
}
const NewUser = (username,password,fullname,address,sex,email,groupid) =>{
    return axios.post('/new-user',{username,password,fullname,address,sex,email,groupid})
}
export { fetchAllUser,
    NewUser};