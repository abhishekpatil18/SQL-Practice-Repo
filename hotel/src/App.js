import { Route, Routes } from 'react-router-dom'
import AdminLogin from './component/login/AdminLogin';
import UserLogin from './component/login/UserLogin';
import Navbar from './component/navbar/Navbar';
import Registration from './component/registration/Registration';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/userLogin' element={<UserLogin/>} ></Route>
        <Route path='/adminLogin' element={<AdminLogin/>} ></Route>
        <Route path='/registration' element={<Registration/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
