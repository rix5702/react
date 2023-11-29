import axios from './customize-axios'

const fetchAllUser = () =>{

    return axios.get('/list-user')
}
export { fetchAllUser};