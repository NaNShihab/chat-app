import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from "./pages/home/Home"
import SignUp from "./pages/signup/SignUp"
import SignIn from "./pages/signin/SignIn"
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext'


function App() {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/signin" />} />
        <Route path='/signin' element={authUser ? <Navigate to="/" />  : <SignIn />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" />  : <SignUp /> } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
