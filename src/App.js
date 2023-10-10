
// import './App.css';

import { Routes, Route } from "react-router-dom";
import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Account from 'pages/AccountPage/AccountPage';
import Layout from 'components/Layout/Layout';
// import Page404 from 'page/Page404/Page404';

export const  App=() => {
 
  return (
    <div>
    <Routes>
    <Route path="/" element={<Layout />}>
       <Route index  element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/account' element={<Account/>}/>
      {/* <Route path="*" element={<Page404/>} /> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
