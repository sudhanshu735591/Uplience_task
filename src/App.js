import './App.css';
import Home from './Component/Home/Home';

import { BrowserRouter, Route , Routes } from 'react-router-dom';
// import CounterPage from './Component/counterPage/counterPage';
// import UserProfile from './Component/UserProfile/userProfile';
import SignUp from './Component/SignUp/signup';
import Login from './Component/Login/Login';

function App() {

  return (
      <BrowserRouter>
        <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/counterpage' element={<CounterPage/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
