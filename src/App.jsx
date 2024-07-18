import { useEffect, useState } from 'react'

import './App.css'
import Router from './router/Router';
import PublicRoutes from './router/routes/PublicRoutes'
import { getRoutes } from './router/routes';

function App() {
 const[allRoutes,setAllRoutes]= useState([...PublicRoutes]);
//  console.log(allRoutes);
useEffect(()=>{
    const routes = getRoutes()
    setAllRoutes([...allRoutes,routes])
    console.log("all routes are", routes);
},[])
 return <Router allRoutes={allRoutes}/>
}
export default App
