import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Profile from './Pages/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Pages/Dashboard'

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
