import './Navbar.css'
import { Link } from "react-router-dom"
import { useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className="nav"> 
    <div className="site-title"> 
    <a href="/" className="portfolio-name"> Renee Mason  </a>
    <p>Full Stack Web Developer</p>
    </div>
    <ul>
      <CustomLink to="/experience"> Professional Experience </CustomLink>
      <CustomLink to="/education"> Education </CustomLink>
      <CustomLink to="/contact"> Contact </CustomLink>
      <CustomLink to="/links"> Links </CustomLink>
    </ul>
    </nav>
  )
}

export default Navbar

function CustomLink( {to, ...props }) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to) 
  const isActive = useMatch( {path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive? "active " : ""} >
      <Link to={to} {...props}> 
      </Link>
      </li>
  )

}