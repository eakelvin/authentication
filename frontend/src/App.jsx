import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/home'
import Login from './Pages/login'
import Signup from './Pages/signup'

function App() {
  return (
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </>
      </Router>
  )
}

export default App
