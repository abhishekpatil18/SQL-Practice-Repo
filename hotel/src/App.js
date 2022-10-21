import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home';
import AdminDashboard from './component/login/AdminDashboard';
import AddHotel from './component/login/adminFuctions/AddHotel';
import UpdateHotel from './component/login/adminFuctions/UpdateHotel';
import UserLogin from './component/login/UserLogin';
import Navbar from './component/navbar/Navbar';
import Registration from './component/registration/Registration';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element= {<Home/> } ></Route>
        <Route path='/userLogin' element= {<UserLogin/>} ></Route>
        <Route path='/adminDashboard' element= {<AdminDashboard/>} ></Route>
        <Route path='/registration' element= {<Registration/>} ></Route>
        <Route path='/adminDashboard/addHotel' element={<AddHotel/>}></Route>
        <Route path='/adminDashboard/updateHotel' element={<UpdateHotel/>}></Route>
      </Routes>
    </>
  );
}

export default App;
