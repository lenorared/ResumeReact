import './Links.css'

const Links = () => {
  return (
    <div className="linkFlex">
      <div className="linkDiv"> 
        <a target="_blank" href="https://www.linkedin.com/in/renee-mason-43ab1718b"> LinkedIn </a> 
        <a target="_blank" href="https://github.com/lenorared"> GitHub </a>
      </div>

      <div className="linkDiv">
        <p> Side Practice Projects: </p>
        <a target="_blank" href="https://game-hub-teal-nu.vercel.app/"> Video Game Hub (React with ChakraUI)  </a>
        <a target="_blank" href="https://reactform-lenorared.vercel.app/"> Expense Tracker (React with Bootstrap)  </a>
        </div>
    </div>
  )
}

export default Links