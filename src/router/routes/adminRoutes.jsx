// import Home from "../../views/Home";

import { lazy } from "react";    
const Orders = lazy(()=> import('../../views/admin/Orders.jsx'))   
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
export const adminRoutes =[
        {
            path:'/admin/dashboard',
            element:<AdminDashboard/>,
            role:'admin'
        },
        {
            path: 'admin/dashboard/orders',
            element : <Orders/> ,
            role : 'admin'
        }
]