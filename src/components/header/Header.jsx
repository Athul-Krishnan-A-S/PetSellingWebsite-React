import './header.css';
import logo from '../../assets/logo.png';
import Navbar from '../navbar/Navbar';
import magnifier from '../../assets/magnifier.png';
import Button from '../button/Button';

function Header() {
    return (
        <div className='header-header'>
            <div className="logo">
                <img
                    src={logo}
                    alt='logo'>
                </img>
            </div>
            <Navbar className="navbar-nav-lists font-bold"/>
            <div className='header-searchbar'>
                <img src={magnifier} alt='magnifier'></img>
                <input className='search-field' type='text' placeholder='Search something here !'></input>
            </div>
            <Button value = "login" className = "login-btn | button bg-blue"/>
        </div>
    );
}

export default Header;