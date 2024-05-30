import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import NavBar from './component/NavBar';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인이 됨

  useEffect(()=>{
    console.log('authenticate', authenticate)
  }, [authenticate]);

  return (
    <div className='font'>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} authenticate={authenticate} />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
