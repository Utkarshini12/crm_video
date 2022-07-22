import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Login from './pages/Login';
import Admin from './pages/Admin';
import Engineer from './pages/Engineer';
import Customer from './pages/Customer';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import NotFound from './components/NotFound';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'react-circular-progressbar/dist/styles.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const ROLES = {
  "ADMIN": "ADMIN", 
  "CUSTOMER": "CUSTOMER", 
  "ENGINEER": "ENGINEER"
}

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
      <Route path="/admin" element={<Admin />} />
      </Route>
    
      {/* <Route element={<RequireAuth allowedRoles={[ROLES.ENGINEER]} />}> */}
      <Route path="/engineer" element={<Engineer />} />
      {/* </Route> */}
     
      <Route element={<RequireAuth allowedRoles={[ROLES.CUSTOMER]} />}>
      <Route path="/customer" element={<Customer />} />
      </Route>
     

      <Route path="/*" element={<NotFound />} />


      </Routes>
    </Router>
   
     
    
   
  );
}

export default App;
