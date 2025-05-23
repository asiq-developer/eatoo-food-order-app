import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Add from './pages/add/Add';
import {Routes,Route} from 'react-router-dom'
import Orders from './pages/orders/Orders';
import List from './pages/list/List';
   import { ToastContainer } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.css'
 


function App() {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer />
      
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
                    <Route path='/' element={<Add url={url} />} />
          <Route path='/add' element={<Add url={url} />} />
           <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Orders url={url}/>} />
             
          </Routes>
      </div>

     
  
    </div>
  );
}

export default App;
