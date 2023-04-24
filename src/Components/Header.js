import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
const Header = () => {
  const [title, setTitle] = useState("Food Villa")
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
          </div>
          <h1>{title}</h1>
          <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
           </ul>
          </div>
        </div>
    )
}
export default Header