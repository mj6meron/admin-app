import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Test from '../test/Test';
import Dashbord from '../dashbord/Dashbord';
import UserAdmin from '../dashbord/User/UserAdmin';

function App() {
  return (
    <div className="App">
        <Router className='appRouter'>
            <Routes className="boxes">
                <Route path="/" element={<Login/>}/>
                <Route path="/dashbord" element={<Dashbord/>}/>
                <Route path="/dashbord/User/UserAdmin" element={<UserAdmin/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </Router>    
    </div>
  );
}

export default App;
