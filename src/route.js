import { Navigate, Outlet, createBrowserRouter,Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
import ListUser from "./components/User/ListUser"
import Login from "./components/User/Login";
import Home from "./Home";
import Admin from "./Admin";


const router = createBrowserRouter([
    {
        children: [
            {
                path: '/',
                element:
                    <Layout>
                        <Home/>
                    </Layout>,
            }, 
            {
                path: '/admin',
                element:
                    <Layout>
                        <Admin/>
                    </Layout>,
            },
            
            {
                path: '/list-user',
                element:
                    <Layout>
                        <ListUser />
                    </Layout>,
               
            },
            {
                path: '/login',
                element:
                    <Layout>
                        <Login />
                    </Layout>,
            }
        ],
    },
])
export default router;