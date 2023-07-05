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
    <footer> 
      <p> Renee Mason, 2023 </p>
      <p> <a href="mailto:rmmason@gmail.com"> rmmason@gmail.com </a> </p>
      <p> Los Angeles, CA </p>
    </footer>
    </>
  )
}

export default App
