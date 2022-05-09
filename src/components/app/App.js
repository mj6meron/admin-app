import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Test from '../test/Test';
import Dashboard from '../dashboard/Dashboard';
import UserAdmin from '../dashboard/User/UserAdmin';
import ProductAdmin from '../dashboard/Product/ProductAdmin';
import AppLayout from '../layouts/AppLayout';
function App() {
  return (
    <div className="App">
        <Router className='appRouter'>
            <Routes className="boxes">
            <Route path="/" element={<Login/>}/>
               
                
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/User/UserAdmin" element={<UserAdmin/>}/>
                <Route path="/dashboard/Product/ProductAdmin" element={<ProductAdmin/>}/>
                <Route path="/test" element={<Test/>}/>
                
            </Routes>
        </Router>    
    </div>
  );
}

export default App;
