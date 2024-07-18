
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React,{lazy,Suspense} from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';
// import store from './store';
const App = lazy(() => import('./App'))
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Provider store={store}>
  <Suspense>
  <App />
  </Suspense>
  </Provider>
</BrowserRouter>
)
