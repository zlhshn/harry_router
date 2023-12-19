
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
      <div className="container text-center mt-4 notfound">
        <img className="w-75" src="./img/404.png" alt="" />
      
     
      </div>
    )
  }
  
  export default NotFound