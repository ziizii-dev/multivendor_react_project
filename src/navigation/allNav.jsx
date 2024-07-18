import { AiOutlineDashboard,AiOutlineShoppingCart } from "react-icons/ai";

export const allNav = [
    {
        id : 1,
        title : 'Dashboard',
        icon : <AiOutlineDashboard />,
        role : 'admin',
        path: '/admin/dashboard'
        
    },
    {
        id : 2,
        title : 'Orders',
        icon : <AiOutlineShoppingCart />,
        role : 'admin',
        path: '/admin/dashboard/orders'
        
    },
    {
        id : 3,
        title : 'Category',
        icon : "oo",
        role : 'admin',
        path: '/admin/dashboard/category'
        
    }
]
