import Logo from "../Logo/Logo"
import "./Header.scss"
import Search from "../Search/Search";
const Header = () => {
    return ( 
        <header>
            <div className="logo">
                <Logo />
            </div>
            <div className="search">
                <Search />
            </div>
        </header>
     );
}
 
export default Header;