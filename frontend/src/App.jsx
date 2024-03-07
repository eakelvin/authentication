import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import PrivateRoute from './Components/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Router>
        <>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </>
      </Router>
  )
}

export default App
