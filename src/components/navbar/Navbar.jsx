import './navbar.css';

function Navbar(props){
    return(
        <ul className={props.className}>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    );
}
export default Navbar;