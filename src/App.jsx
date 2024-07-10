import { useState } from 'react'

import './App.css'
import Router from './router/Router';
import PublicRoutes from './router/routes/PublicRoutes'

function App() {
 const[allRoutes,setAllRoutes]= useState([...PublicRoutes]);
 console.log(allRoutes);
 return <Router allRoutes={allRoutes}/>
}
export default App
