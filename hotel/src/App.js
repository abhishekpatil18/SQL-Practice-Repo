import { Route, Routes } from 'react-router-dom'
import AvailableHotel from './component/home/AvailableHotel';
import BookTable from './component/home/BookTable';
import Home from './component/home/SelectedHotel';
import AdminDashboard from './component/login/AdminDashboard';
import AddHotel from './component/login/adminFuctions/AddHotel';
import ShowBookings from './component/login/adminFuctions/ShowBookings';
import ShowCancellation from './component/login/adminFuctions/ShowCancellation';
import ShowUsers from './component/login/adminFuctions/ShowUsers';
import UpdateHotel from './component/login/adminFuctions/UpdateHotel';
import UserLogin from './component/login/UserLogin';
// import Navbar from './component/navbar/Navbar';
import Registration from './component/registration/Registration';
import ShowUserBooking from './component/home/ShowUserBookings';
import ShowUserCancellation from './component/home/ShowUserCancellation';

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element= {<UserLogin/> } ></Route>
        <Route path='/home' element= {<Home/>} ></Route>
        <Route path='/bookTable' element= {<BookTable/>} ></Route>
        <Route path='/availableHotel' element= {<AvailableHotel/>} ></Route>
        <Route path='/showUserBookings' element= {<ShowUserBooking/>} ></Route>
        <Route path='/showUserCancellation' element= {<ShowUserCancellation/>} ></Route>
        <Route path='/adminDashboard' element= {<AdminDashboard/>} ></Route>
        <Route path='/registration' element= {<Registration/>} ></Route>
        <Route path='/adminDashboard/addHotel' element={<AddHotel/>}></Route>
        <Route path='/adminDashboard/updateHotel' element={<UpdateHotel/>}></Route>
        <Route path='/adminDashboard/showBooking' element={<ShowBookings/>}></Route>
        <Route path='/adminDashboard/showUser' element={<ShowUsers/>}></Route>
        <Route path='/adminDashboard/showCancellation' element={<ShowCancellation/>}></Route>
      </Routes>
    </>
  );
}

export default App;
