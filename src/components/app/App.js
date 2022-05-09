import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Test from '../test/Test';
import Dashbord from '../dashbord/Dashbord';
import UserAdmin from '../dashbord/User/UserAdmin';
import ProductAdmin from '../dashbord/Product/ProductAdmin';
import AppLayout from '../layouts/AppLayout';

function App() {
  return (
    <div className="App">
        <Router className='appRouter'>
            <Routes className="boxes">
                <Route path='/' element={<AppLayout />}>
                <Route index element={<Dashbord/>} />
                <Route path="/" element={<Login/>}/>
                <Route path="/dashbord" element={<Dashbord/>}/>
                <Route path="/dashbord/User/UserAdmin" element={<UserAdmin/>}/>
                <Route path="/dashbord/Product/ProductAdmin" element={<ProductAdmin/>}/>
                <Route path="/test" element={<Test/>}/>
                </Route>
            </Routes>
        </Router>    
    </div>
  );
}

export default App;
