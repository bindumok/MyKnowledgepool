import React from 'react'
import Nav from '../Project/Nav';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer  , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import "./global.css"
import Bookscart from '../Project/Bookscart'
import Books from '../Project/Books'
import Update from '../Project/Update';

const App = () => {
  return (
    <div>
      <ToastContainer/>
       <Router>
          <Nav/>
          <Routes>
              <Route path='/' element={<Bookscart/>} />
              <Route path="/books" element={<Books/>}/>
              <Route path='/update/:id' element={<Update/>}/>
          </Routes>
       </Router>
    </div>
  )
}



export default App