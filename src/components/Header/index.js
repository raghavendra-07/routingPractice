// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-main-con">
    <div className="nav-inner-con">
      <div className="wave-logo-con">
        <img
          className="wave-logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="wave-head">Wave</h1>
      </div>

      <ul className="ul-list-con">
        <li>
          <Link className="li-list" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="li-list" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="li-list" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
