import './App.css'
import { Contact } from './pages/Contact'
import Links from './pages/Links'
import Navbar from './Navbar'
import Education from './pages/Education'
import Experience from './pages/Experience'
import { Route, Routes } from "react-router-dom"
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
    <Navbar />
    <div className="container"> 
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
    <footer> </footer>
    </>
  )
}

export default App
