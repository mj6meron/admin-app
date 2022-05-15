import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import UpdateUser from '../update/UpdateUser'
import UnknownRoutes from '../UnknownRoutes/UnknownRoutes';
function App() {
  return (
    <div className="App">
        <Router className='appRouter'>
            <Routes className="boxes">
            <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/updateuser" element={<UpdateUser/>}/>
                <Route path="*" element={<UnknownRoutes/>}/>
            </Routes>
        </Router>    
    </div>
  );
}

export default App;
