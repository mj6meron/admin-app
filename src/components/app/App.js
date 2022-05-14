import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Test from '../test/Test';
import Dashboard from '../dashboard/Dashboard';
import UserAdmin from '../dashboard/User/UserAdmin';
import UpdateUser from '../update/UpdateUser'

function App() {
  return (
    <div className="App">
        <Router className='appRouter'>
            <Routes className="boxes">
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashbord/User/UserAdmin" element={<UserAdmin/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/updateuser" element={<UpdateUser/>}/>
            </Routes>
        </Router>    
    </div>
  );
}

export default App;
