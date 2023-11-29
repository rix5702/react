import axios from './customize-axios'

const fetchAllBrand = () =>{

    return axios.get('/list-brand')
}
// const NewBrand = () =>{
//     // return axios.post('/new-user',{fullname, username,sex,email, address, groupid,password})
// }
export { fetchAllBrand,
    };