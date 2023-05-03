import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './Componets/Home';
import style from './css/Style.css';
import Signin from './Sign/Signin';
import Forget from './Sign/Forget';
import Sub_home from './Componets/Sub_home';

function App() {
  return (
    <>
      <Routes>
        <Route path='admin' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='forget-password' element={<Forget />} />
        <Route path='home' element={<Sub_home />} />

      </Routes>

    </>
  );
}

export default App;
