
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import Signup from './pages/signUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default App
