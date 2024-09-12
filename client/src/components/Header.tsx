import { Link } from 'react-router-dom';
import logo from "../assets/logo-itb.png"

const Header = () => {
    return (
    <header className="bg-gray-800 p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to='/' className='link logo'><img 
            src={logo} alt="Logo" className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to='/profile' className='flex items-center'><img
            src={logo}
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-gray-700"/>
          </Link>
        </div>
      </div>
    </header>
    )
}

export default Header;